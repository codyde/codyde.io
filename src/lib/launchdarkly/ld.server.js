import LaunchDarkly from 'launchdarkly-node-server-sdk'
import { env } from '$env/dynamic/public'

let launchDarklyClient
async function initialize() {
  const client = LaunchDarkly.init(env.PUBLIC_LD_SERVER_SDK_KEY)
  await client.waitForInitialization()
  return client
}
async function getClient() {
  if (launchDarklyClient) return launchDarklyClient
  return (launchDarklyClient = await initialize())
}
export async function getFlagValue(key, user) {
  const client = await getClient()
  let flagValue
  if (!user) {
    user = {
      key: 'anonymous',
    }
  }
  flagValue = await client.variation(key, user, false)
  console.log("Hi this is "+ flagValue)
  return flagValue
}