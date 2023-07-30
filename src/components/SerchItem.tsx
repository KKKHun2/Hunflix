import { IGetSearchResult, searchData } from "../api";
import { useQuery } from "@tanstack/react-query";

export const SerchItem = ({ keyword }: { keyword: string }) => {
    const { data } = useQuery<IGetSearchResult>(
        ["search", keyword],
        () => searchData(keyword || ""),
        { useErrorBoundary: true }
      );

  return (
    <div>serchItem</div>
  )
}
