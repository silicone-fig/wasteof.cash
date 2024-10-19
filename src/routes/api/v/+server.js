// @ts-nocheck
import { json } from '@sveltejs/kit';
import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const commitInfo = execSync(
      'git log -1 --format="%H%n%an%n%ct%n%T"'
    ).toString().trim().split('\n');

    const [
      hash,
      author,
      lastUpdateTimestamp,
      treeHash
    ] = commitInfo;

    const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    const remoteUrl = execSync('git config --get remote.origin.url').toString().trim();

    const project = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));
    const version = project.version || 'unknown';

    const commitData = {
      hash,
      author,
      lastUpdate: new Date(parseInt(lastUpdateTimestamp) * 1000).toISOString(),
      treeHash,
      branchName,
      remoteUrl,
      version
    };

    return json(commitData, 200);
  } catch (error) {
    console.error('error getting git commit info:', error);
    return json({ error: 'unable to verify integrity' }, 500);
  }
}