import React, {PropsWithChildren, useContext, useState} from "react";
import { BreakingNewsMetadataDto} from "../../../common/types";


interface BreakingNewsSetters {
    setBreakingNewsArticleMetadata: React.Dispatch<React.SetStateAction<BreakingNewsMetadataDto | null>>;
    setBreakingNewsContent: React.Dispatch<React.SetStateAction<string>>
}

interface BreakingNewsVariables {
    breakingNewsArticleMetadata: BreakingNewsMetadataDto | null;
    breakingNewsContent: string;
}

interface BreakingNewsContextInterface extends BreakingNewsSetters, BreakingNewsVariables {}

const BreakingNewsContext = React.createContext<BreakingNewsContextInterface>({} as BreakingNewsContextInterface);

export const useBreakingNewsContext = () => useContext(BreakingNewsContext);

const BreakingNewsProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {

    const [breakingNewsArticleMetadata, setBreakingNewsArticleMetadata] = useState<BreakingNewsMetadataDto | null>(null);
    const [breakingNewsContent, setBreakingNewsContent] = useState<string>('');


    return (
        <BreakingNewsContext.Provider value={{
            breakingNewsArticleMetadata,
            setBreakingNewsArticleMetadata,
            breakingNewsContent,
            setBreakingNewsContent

        }}>
            {children}
        </BreakingNewsContext.Provider>
    );
}

export default BreakingNewsProvider;
