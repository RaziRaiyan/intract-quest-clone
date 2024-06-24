import gridTrending from '../../assets/grid-trending.png';

import style from './WidgetItem.module.css'

import { WidgetItem as WidgetItemType } from '../../types/WidgetItem';

interface WidgetItemProps extends WidgetItemType {
    // add props here
    index: number;
}

const WidgetItem = (props: WidgetItemProps) => {

    const backgroundColorClass = `bg-${props.index % 4}`;

    const handleOnWidgetClick = () => {
        window.open(`https://intract.io${props.path}`, "_blank");
    }

    return (
        <div
            className={[style.widget_container, style.widget_wrapper].join(" ")}
            style={{
                cursor: "pointer",
                height: "auto",
                width: "291px",
                marginRight: "16px",
            }}
            onClick={handleOnWidgetClick}
        >
            <div className={style.hero_section}>
                <div
                    className={[style.container, backgroundColorClass].join(
                        " "
                    )}
                >
                    <div style={{ position: "relative" }}>
                        <img src={gridTrending} alt="grid" />
                        <div>
                            <img
                                src={props.banner}
                                alt="banner"
                            />
                        </div>
                    </div>
                    <button data-id="bookmark-quest">
                        <i data-id="bookmark-quest" className="bi-bookmark"></i>
                    </button>
                    <article
                        className={style.user_container}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            zIndex: 1000,
                        }}
                    >
                        <section
                            style={{ display: "flex", marginRight: "-10px" }}
                        >
                            <img
                                src="https://static.highongrowth.xyz/enterprise/65eef578c069007c5d70d3a1/a3483211bb474400b23a183f97b774fd.png"
                                className={style.user_avatar}
                                alt=""
                            />
                            <img
                                src="https://static.highongrowth.xyz/enterprise/65eef578c069007c5d70d3a1/0e4c0a79cfdd4a62ac858dbab59e593a.png"
                                className={style.user_avatar}
                                alt=""
                            />
                            <img
                                src="https://static.highongrowth.xyz/enterprise/65eef578c069007c5d70d3a1/b1d9643ae8fb431e887c282d042e3df5.png"
                                className={style.user_avatar}
                                alt=""
                            />
                        </section>
                        <span className={style.total_completed}>2.9K</span>
                    </article>
                </div>
            </div>
            <div className={style.content_section}>
                <div>
                    <img
                        src="https://static.highongrowth.xyz/enterprise/662a30114869afabb43421a7/74a608a326e84c678c50dfef98428282.png"
                        alt="Runes Ecosystem Campaign: Wave 2"
                    />
                    <span className="text-truncate">{props.projectName}</span>
                </div>
                <h4 className="text-truncate">{props.title}</h4>
            </div>
        </div>
    );
};

export default WidgetItem;