// build-insrpt.js
import path from 'path';

export default function buildInsrpt() {
  return {
    name: 'build-insrpt',
    enforce: 'pre',

    async buildStart() {
      console.log('Signature fetched successfully.');
    },

    transform(code, id) {
      const normalizedPath = path.normalize(id).replace(/\\/g, '/');
      if (normalizedPath.endsWith('src/routes/+page.svelte')) {
        console.log(`Injecting signature into ${normalizedPath}`);
        
        const credits = `
<script>
  import { onMount } from 'svelte';
  onMount(() => {
    const message = \`
wasteof.cash by siliconeCB_
wasteof.money by @jeffalo

all rights reserved
my hard work please don't steal

(c)@ siliconecb.cc
\`;
    console.log(message);
    console.log(message);
    console.log(message);
  });
</script>

`;

        return {
          code: credits + code,
          map: null
        };
      }
      return null;
    }
  };
}