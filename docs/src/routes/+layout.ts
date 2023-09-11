import config from '$config';

export const prerender = true;

export function load() {
  return {
    title: config.project.title,
    copyright: config.project.copyright
  }
}
