import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import React from "react";
import colorbrewer from "../../utils/colorbrewer";

export interface ColorScaleProps {
    bins: number;
    scale?: string;
    width?: number;
    onClick?: Function;
    style?: object;
}

// Returns one color scale based on a code and number of classes
export const ColorScale = ({
    scale = "",
    bins,
    width,
    style = {},
    onClick = _.noop,
}: ColorScaleProps) => {
    const classes = useStyles();

    const colors = colorbrewer[scale][bins];
    const itemWidth = width ? width / bins : 36;

    return (
        <ul
            className={classes.scale}
            style={{
                ...(width && { width }),
                ...style,
            }}
            onClick={event => onClick(event, scale)}
        >
            {colors.map((color, index) => (
                <li
                    key={index}
                    className={classes.item}
                    style={{ backgroundColor: color, width: itemWidth }}
                />
            ))}
        </ul>
    );
};

const useStyles = makeStyles({
    scale: {
        paddingLeft: 0,
        height: 36,
        cursor: "pointer",
        boxShadow: "0 1px 6px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.12)",
        display: "inline-block",
        whiteSpace: "nowrap",
    },
    item: {
        marginLeft: 0,
        display: "inline-block",
        height: "100%",
    },
});
