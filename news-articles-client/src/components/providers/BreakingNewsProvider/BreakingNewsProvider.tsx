import React, {PropsWithChildren, useContext, useState} from "react";
import { BreakingNewsMetadataDto} from "../../../common/types";

/**
 *  creating provider for breaking news metadata state
 *  and its reusable context
 */

interface BreakingNewsSetters {
    setBreakingNewsArticleMetadata: React.Dispatch<React.SetStateAction<BreakingNewsMetadataDto | null>>;
}

interface BreakingNewsVariables {
    breakingNewsArticleMetadata: BreakingNewsMetadataDto | null;
}

interface BreakingNewsContextInterface extends BreakingNewsSetters, BreakingNewsVariables {}

const BreakingNewsContext = React.createContext<BreakingNewsContextInterface>({} as BreakingNewsContextInterface);

export const useBreakingNewsContext = () => useContext(BreakingNewsContext);

const BreakingNewsProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {

    const [breakingNewsArticleMetadata, setBreakingNewsArticleMetadata] = useState<BreakingNewsMetadataDto | null>(null);


    return (
        <BreakingNewsContext.Provider value={{
            breakingNewsArticleMetadata,
            setBreakingNewsArticleMetadata,

        }}>
            {children}
        </BreakingNewsContext.Provider>
    );
}

export default BreakingNewsProvider;
