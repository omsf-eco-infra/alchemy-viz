/**
 * Put a `<gufe-view>` in a host element and give it a payload.
 *
 * This is the two lines a page writes to draw something, wrapped up because the
 * three dev pages - `index.html`'s dropzone, the gallery and the parity page -
 * each draw many payloads and would otherwise repeat it per card.
 *
 * It lives here rather than in `index.ts` because the dev pages are its only
 * callers and they import `src/**` directly. The bundle's own contract is the
 * two lines themselves, which is what `to_html` and the notebook shell write;
 * see `index.ts`.
 */

/** The shape a `<gufe-view>` presents to whoever mounted it. */
export type MountedView = HTMLElement & { payload: unknown };

/**
 * Reuses an existing `<gufe-view>` if `host` already has one, so calling this
 * again is an update rather than a rebuild - the create/update/destroy cycle as
 * seen from outside.
 */
export function mount(host: HTMLElement, payload?: unknown): MountedView {
  let view = host.querySelector("gufe-view") as MountedView | null;
  if (!view) {
    view = document.createElement("gufe-view") as MountedView;
    view.style.cssText = "display:block;width:100%;height:100%;";
    host.appendChild(view);
  }
  if (payload !== undefined) view.payload = payload;
  return view;
}
