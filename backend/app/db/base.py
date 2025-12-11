from sqlalchemy.orm import declarative_base

Base = declarative_base()

# IMPORTANTE: carregar todos os modelos aqui
from app.models.note import Note
from app.models.graph import Graph
from app.models.node import Node
from app.models.edge import Edge
from app.models.ambiguity import Ambiguity