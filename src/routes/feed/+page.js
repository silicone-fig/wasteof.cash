import { browser } from '$app/environment';
import { goto } from '$app/navigation';

/**
 * @type {import('@sveltejs/kit').Load}
 */
export function load(/** @type {import('@sveltejs/kit').LoadEvent} */ event) {
    if (browser) {
        const areyousignedin = document.cookie.includes('token=');
        if (!areyousignedin) {
            goto('/');
        }
    }

    return {};
}