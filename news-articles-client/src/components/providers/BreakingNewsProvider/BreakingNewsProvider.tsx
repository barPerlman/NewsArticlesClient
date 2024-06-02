import React, {PropsWithChildren, useContext, useState} from "react";
import { BreakingNewsMetadataDto} from "../../../common/types";

/**
 *  creating provider for breaking news metadata and content states
 *  and its reusable context
 */

interface BreakingNewsSetters {
    setBreakingNewsArticleMetadata: React.Dispatch<React.SetStateAction<BreakingNewsMetadataDto | null>>;
    setBreakingNewsArticleContent: React.Dispatch<React.SetStateAction<string>>;
    setIsLoadingContent: React.Dispatch<React.SetStateAction<boolean>>
}

interface BreakingNewsVariables {
    breakingNewsArticleMetadata: BreakingNewsMetadataDto | null;
    breakingNewsArticleContent: string;
    isLoadingContent: boolean;
}

interface BreakingNewsContextInterface extends BreakingNewsSetters, BreakingNewsVariables {}

const BreakingNewsContext = React.createContext<BreakingNewsContextInterface>({} as BreakingNewsContextInterface);

export const useBreakingNewsContext = () => useContext(BreakingNewsContext);

const BreakingNewsProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {

    const [breakingNewsArticleMetadata, setBreakingNewsArticleMetadata] = useState<BreakingNewsMetadataDto | null>(null);
    const [breakingNewsArticleContent, setBreakingNewsArticleContent] = useState<string>('');
    const [isLoadingContent, setIsLoadingContent] = useState<boolean>(false);


    return (
        <BreakingNewsContext.Provider value={{
            breakingNewsArticleMetadata,
            setBreakingNewsArticleMetadata,
            breakingNewsArticleContent,
            setBreakingNewsArticleContent,
            isLoadingContent,
            setIsLoadingContent,
        }}>
            {children}
        </BreakingNewsContext.Provider>
    );
}

export default BreakingNewsProvider;
