"""The registry: one copy of each gufe object, addressed by its gufe key.

Every reference from one payload to another is a gufe key, and the objects those
keys name live in the ``registry`` array on the root payload. That is the only
deduplication mechanism: there are no reference-only or summary-only variants,
so a key always resolves to a complete, drawable object.

gufe keys are content-derived, so the same molecule reached twice - as a network
node and as a mapping endpoint - collapses into one entry without anyone having
to notice. A payload is a single-shot dump with no server to ask, so the protein
a node refers to travels with the graph, once.
"""

from __future__ import annotations

from typing import Any


class Registry:
    """A gufe-key-to-payload pool, built while walking a gufe object graph."""

    def __init__(self) -> None:
        self._entries: dict[str, dict[str, Any]] = {}

    def add(self, payload: dict[str, Any]) -> str:
        """Register ``payload`` and return the key that now refers to it.

        First writer wins: equal keys mean equal gufe objects, so keeping the first is
        not a choice between two different things.
        """
        key = payload["gufe-key"]
        self._entries.setdefault(key, payload)
        return key

    def entries(self) -> list[dict[str, Any]]:
        """The pool, sorted by ``(type, gufe-key)``.

        Sorted because the committed examples have to be byte-stable and gufe holds most
        collections in a ``frozenset``. By type first so a diff is legible - all the
        molecules, then the protocols, then the systems.
        """
        return sorted(self._entries.values(), key=lambda entry: (entry["type"], entry["gufe-key"]))

    def __contains__(self, key: str) -> bool:
        return key in self._entries

    def __len__(self) -> int:
        return len(self._entries)
