import fetch from 'node-fetch';

const server = 'http://csi.cstjean.qc.ca';

async function auth(name: string, password: string) {
  const res = await fetch(`${server}/login`);
}
