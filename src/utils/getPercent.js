export function getPercent(part, total) {
    if(total != 0) {
        return part / total * 100;
    }
    else {
        return NaN;
    }
}