from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base

class Node(Base):
    __tablename__ = "nodes"

    id = Column(Integer, primary_key=True, index=True)
    graph_id = Column(Integer, ForeignKey("graphs.id"), nullable=False)

    label = Column(String, nullable=False)
    type = Column(String, nullable=True)
    x = Column(Float, nullable=True)
    y = Column(Float, nullable=True)

    graph = relationship("Graph", back_populates="nodes")