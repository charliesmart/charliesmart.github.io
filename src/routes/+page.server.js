import archieml from 'archieml';
import fs from 'fs';

export const prerender = true;

export async function load({ params }) {
    const about = fs.readFileSync('content/about.aml', 'utf8');

    const parsed = archieml.load(about);

    return {
        content: parsed
    }
}