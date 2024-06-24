import { useCallback, useEffect, useState } from "react";
import { WidgetItem } from "../types/WidgetItem";
import { fetchWidgets } from "../services/widgets";

export const useWidgetsList = () => {
    const [widgets, setWidgets] = useState<WidgetItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async (id: string) => {
        setIsLoading(true);
        const data = await fetchWidgets(id);

        console.log({data});

        setWidgets(data);
        setIsLoading(false);
    }, []);


    useEffect(() => {
        fetchData(String());
    }, [fetchData]);


    return {
        widgets,
        isLoading
    };
};
