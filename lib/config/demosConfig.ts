export interface DemoConfig {
  playerUrl: string;
  organizerUrl: string;
}

export function getDemosConfig(): DemoConfig {
  return {
    playerUrl: process.env.NEXT_PUBLIC_PLAYER_DEMO_URL || '',
    organizerUrl: process.env.NEXT_PUBLIC_ORGANIZER_DEMO_URL || '',
  };
}
