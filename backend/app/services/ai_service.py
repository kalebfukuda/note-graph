from openai import OpenAI
from dotenv import load_dotenv
import requests
import os
import json
from azure.ai.inference import ChatCompletionsClient
from azure.core.credentials import AzureKeyCredential

load_dotenv()  # <-- carrega automaticamente seu arquivo .env
#api_key = os.getenv("OPENAI_API_KEY")
#client = OpenAI(api_key=api_key)
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
BASE_URL = "https://models.inference.ai.azure.com"

if not GITHUB_TOKEN:
    raise Exception("Missing GITHUB_TOKEN in environment variables")

client = ChatCompletionsClient(
    endpoint=BASE_URL,
    credential=AzureKeyCredential(GITHUB_TOKEN)
)

# def analyze_text(text: str):
#     prompt = f"""
# Você é um analisador de estrutura de estudos.
# Retorne APENAS JSON válido, sem explicações.

# Formato obrigatório:
# {{
#   "nodes": [ {{ "id": "...", "label": "...", "type": "..." }} ],
#   "edges": [ {{ "from": "...", "to": "...", "relation": "..." }} ],
#   "ambiguities": [ "descrição do problema" ]
# }}

# Texto do usuário:
# {text}
# """

#     completion = client.responses.create(
#         model="gpt-4o-mini",
#         input=prompt
#     )

#     raw_output = completion.output[0].content[0].text

#     try:
#         return json.loads(raw_output)
#     except Exception:
#         return {
#             "error": "A IA retornou um JSON inválido.",
#             "raw_output": raw_output
#         }
def analyze_text(text: str):
    prompt = f"""
Você é um analisador inteligente de anotações de estudo.
Sua função é transformar textos escritos pelo usuário em uma estrutura de grafo clara e organizada.

As anotações podem conter:
- títulos (às vezes sublinhados)
- subtópicos
- listas e sublistas
- setas indicando relações (ex: A -> B)
- palavras-chave destacadas
- exemplos
- texto solto ou ambíguo
Sua tarefa é gerar um JSON válido com esta estrutura:


  "nodes": [
    {{ "id": "n1", "label": "texto", "type": "root | topic | subtopic | detail | unknown" }}
  ],
  "edges": [
    {{ "from": "n1", "to": "n2", "relation": "parent | child | explains | example | causes | depends-on | related" }}
  ],
  "ambiguities": [
    "descrição de algo que não ficou claro"
  ]


REGRAS DE INTERPRETAÇÃO:

1. NODES
   - Títulos sublinhados ou claramente principais → type: "root"
   - Tópicos ou seções → type: "topic"
   - Itens de lista e subitens → type: "subtopic"
   - Detalhes e frases específicas → type: "detail"
   - Trechos confusos, desconexos ou ambíguos → type: "unknown"

2. EDGES
   - Relação hierárquica → "child"
   - Se houver setas no texto (A -> B), criar relation "related" ou "causes"
   - Exemplos marcados ("ex:", "por exemplo") → relation "example"
   - Conexões naturais entre itens → "parent" ou "child"

3. AMBIGUITIES
   - Sempre liste qualquer ponto confuso:
     * seta sem contexto
     * referência circular
     * título sem conteúdo
     * listas incompletas
     * frases soltas sem ligação clara

4. IMPORTANTE
   - Não invente nós.
   - Não adicione textos antes ou depois do JSON.
   - O JSON deve ser totalmente válido.
   - IDs devem ser curtos: n1, n2, n3…

Agora analise o seguinte texto do usuário e gere apenas o JSON final:
{text}
"""
    
    response = client.complete(
        messages=[
            {"role": "user", "content": prompt}
        ],
        model="gpt-4o"  # ou outro modelo disponível
    )    

    # if response.status_code != 200:
    #     raise Exception(f"API error: {response.status_code} — {response.text}")

    # print(response.choices[0].message.content)
    # # data = response.json()

    # # A API retorna normalmente assim:
    # # { "output_text": "...", ... }
    # output = data.get("output_text", "")

    return response.choices[0].message.content
