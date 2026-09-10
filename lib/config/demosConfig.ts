export interface DemoConfig {
  playerUrl: string;
  organizerUrl: string;
}

export function getDemosConfig(): DemoConfig {
  return {
    playerUrl: process.env.PLAYER_DEMO_URL || '',
    organizerUrl: process.env.ORGANIZER_DEMO_URL || '',
  };
}
