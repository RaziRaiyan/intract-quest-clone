import { useWidgetsList } from "../../hooks/useWidgetsData";
import WidgetsSection from "../WidgetsSection/WidgetsSection";
import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const PADDING_SIZE = 10;

const TITLES = [
    "Airdrop Opportunities",
    "Buzzing Expeditions",
    "Daily New Alpha For You",
    "Engaging NFTs",
];

const HomePage = () => {
    const { widgets, isLoading } = useWidgetsList();

    const largeSections = Array.from({ length: 100 }, () => Math.random());

    const Row = ({
        index,
        style,
    }: {
        index: number;
        style: React.CSSProperties;
    }) => (
        <div style={{ ...style, padding: PADDING_SIZE }}>
            <WidgetsSection
                title={TITLES[index % TITLES.length]}
                widgets={widgets}
            />
        </div>
    );

    const innerElementType = forwardRef<
        HTMLDivElement,
        React.HTMLProps<HTMLDivElement>
    >(({ style, ...rest }, ref) => (
        <div ref={ref} style={{ ...style, padding: PADDING_SIZE }} {...rest} />
    ));

    return (
        <div className="container" style={{height: '850px'}}>
            {isLoading ? (
                <div className="w-full mt-20 flex items-center justify-center">
                    Loading...
                </div>
            ) : (
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            height={height}
                            itemCount={largeSections.length}
                            itemSize={464 + PADDING_SIZE * 2} // Adjust itemSize to include padding
                            width={width}
                            innerElementType={innerElementType}
                        >
                            {Row}
                        </List>
                    )}
                </AutoSizer>
            )}
        </div>
    );
};

export default HomePage;
