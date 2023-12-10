import { GraphQLVariables } from "../type/user";

export const getRankingApiUrl: string =
  "https://d6ui2fy5uj.execute-api.ap-northeast-2.amazonaws.com/api/graphql";

export const getGraphQLRankingQuery = (criteria: string) => `
query getUserRankingQuery($rankingCriteria: String, $rankingPage: Int, $rankingCount: Int, $generation: Int) {
  ranking(criteria: $rankingCriteria, page: $rankingPage, count: $rankingCount, generation : $generation){
      name
      generation
      nickname
      bio
      public_repos
      avatar_url
      ${criteria}
  }
}

`;

export const getUserInformCriteria = (
  criteria: string,
  generation: number
): GraphQLVariables => {
  return {
    rankingCriteria: criteria,
    rankingCount: 100,
    rankingPage: 1,
    generation,
  };
};

export const getGraphQLGenerationQuery = () => `
query getGenerationListQuery{
  generation{
    _id
    count
  }
}
`;
