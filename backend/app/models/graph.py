from sqlalchemy import Column, Integer, ForeignKey, JSON, DateTime, func
from sqlalchemy.orm import relationship
from app.db.base import Base

class Graph(Base):
    __tablename__ = "graphs"

    id = Column(Integer, primary_key=True, index=True)
    note_id = Column(Integer, ForeignKey("notes.id"), nullable=True)

    raw_json = Column(JSON, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    note = relationship("Note", back_populates="graphs")
    nodes = relationship("Node", back_populates="graph", cascade="all, delete")
    edges = relationship("Edge", back_populates="graph", cascade="all, delete")
    ambiguities = relationship("Ambiguity", back_populates="graph", cascade="all, delete")