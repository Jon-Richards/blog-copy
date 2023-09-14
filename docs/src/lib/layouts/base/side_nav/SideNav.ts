import CONFIG from '$config';
import type { Section } from '$config';

const sitemap = CONFIG.sitemap;
export const docSections = findDocumentationSections();

function findDocumentationSections() {
  const result: Section[] = [];
  const docs = sitemap.find(section => section.title === 'Documentation');
  if (docs?.subsections) {
    docs.subsections.forEach(section => result.push(section));
  }
  return result;
}
