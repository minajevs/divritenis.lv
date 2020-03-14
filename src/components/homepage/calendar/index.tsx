import React from 'react'
import ReactDOM from 'react-dom'
import FullCalendar from '@fullcalendar/react'

import dayGridPlugin from '@fullcalendar/daygrid'
import momentPlugin from '@fullcalendar/moment'

import { isSameDay, format } from 'date-fns'

import './calendar.scss'
import { VerboseFormattingArg, View } from '@fullcalendar/core'

export type Props = {

}

const dateNames = ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S']
const formatColumnsHeader = (options: VerboseFormattingArg) => {
    const date = new Date(options.date.year, options.date.month, options.date.day)
    return dateNames[date.getDay()]
}

const formatTitle = (options: VerboseFormattingArg) => {
    const date = new Date(options.date.year, options.date.month, options.date.day)
    const monthName = date.toLocaleString('lv-LV', { month: "long" })
    const capitalizedMonthName = monthName[0].toLocaleUpperCase() + monthName.slice(1)
    return `${capitalizedMonthName} ${options.date.year}`
}

type DayRenderArg = {
    view: View
    date: Date
    allDay?: boolean
    el: HTMLElement
}

type CalendarEventType = {
    title: string
    date: Date
}

const renderDay = (events: CalendarEventType[]) => (arg: DayRenderArg) => {
    const dayEvents = events.filter(x => isSameDay(arg.date, x.date))

    if (dayEvents.length === 0) return

    const dayElement = document.querySelector(`.fc-day-top[data-date="${format(arg.date, 'yyyy-MM-dd')}"]`)

    if (dayElement === null) return

    dayElement.classList.add('has-event')
}

export const Calendar: React.FC<Props> = () => {
    const events = [
        { title: 'Event 1', date: new Date(2020, 2, 2) },
        { title: 'Event 1', date: new Date(2020, 2, 8) },
        { title: 'Event 1', date: new Date(2020, 2, 20) },
        { title: 'Event 1', date: new Date(2020, 1, 24) },
    ]

    console.log(events)
    return (
        <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin, momentPlugin]}

            themeSystem='standart'
            height='auto'

            header={{
                left: 'prev',
                center: 'title',
                right: 'next'
            }}
            firstDay={1}

            titleFormat={formatTitle}
            columnHeaderFormat={formatColumnsHeader}

            eventRender={_ => false}
            dayRender={renderDay(events)}
        />
    )
}

export default Calendar