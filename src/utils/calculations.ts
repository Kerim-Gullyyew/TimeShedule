interface CalculateGrossPayProps {
    data: Array<any> | undefined | null,
    user: any
}
export const CalculateGrossPay = ({ data, user }: CalculateGrossPayProps) => {
    let hours = 0
    let minutes = 0
    if (Array.isArray(data)) {
        data.forEach(element => {
            hours = hours + element.worked_hours
            minutes = minutes + element.worked_minutes
        });
    }
    return user.user.pay_rate * (hours + minutes / 60)
}

interface getSumMoneyProps {
    element: any,
    user: any
}
export const getSumMoney = ({ element, user }: getSumMoneyProps) => {
    let sum = Number(((element.worked_hours + element.worked_minutes / 60) * user.user.pay_rate).toFixed(1));
    return { value: sum }
}

interface CalcProps {
    item: any,
    user: any
}
export const monthCalc = ({ item }: CalcProps) => {
    let day = item.month_name + '  ' + item.createdAt.slice(8, 10)
    return day;
}

export const moneyCalc = ({ item, user }: CalcProps) => {
    let sum = (item.worked_hours + (item.worked_minutes / 60)) * user.data.user.pay_rate;
    return Number(sum.toFixed(2))
}

export const timeCalc = ({ item, user }: CalcProps) => {
    let h = item.worked_hours
    let m = item.worked_minutes
    return h + " H" + "   " + m + " M"
}