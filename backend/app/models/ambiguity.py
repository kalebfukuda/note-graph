from sqlalchemy import Column, Integer, Text, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base

class Ambiguity(Base):
    __tablename__ = "ambiguities"

    id = Column(Integer, primary_key=True, index=True)
    graph_id = Column(Integer, ForeignKey("graphs.id"), nullable=False)
    description = Column(Text, nullable=False)

    graph = relationship("Graph", back_populates="ambiguities")