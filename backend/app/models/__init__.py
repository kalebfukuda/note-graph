from app.models import note, graph, node, edge, ambiguity

# Import all models so Alembic detects them
from app.models.node import Node     # noqa
from app.models.edge import Edge     # noqa
from app.models.note import Note     # noqa
from app.models.graph import Graph   # noqa
from app.models.ambiguity import Ambiguity   # noqa