export type SurveyProblemType =
  | "find_games"
  | "coordination"
  | "community"
  | "fragmented_information";

export type BetaJoinData = {
  name: string;
  email: string;
  discord?: string;
};

export type SurveyData = {
  role: "player" | "organizer" | "both" | "";
  frequency?: "weekly" | "monthly2" | "monthly1" | "occasional" | "inactive";
  problem?: SurveyProblemType;
  features?: ("find_events" | "manage_events" | "community" | "all_in_one")[];
  interest?: "beta" | "feedback" | "both" | "news";
  betaJoin?: BetaJoinData;
};