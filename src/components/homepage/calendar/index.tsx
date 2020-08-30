import React, { useState } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import momentPlugin from '@fullcalendar/moment'
import interactionPlugin from '@fullcalendar/interaction'
import { VerboseFormattingArg, View } from '@fullcalendar/core'

import { isSameDay, format } from 'date-fns'

import './calendar.scss'
import Events, { CalendarEventType } from './Events'

export type Props = {}

const dateNames = ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S']
const formatColumnsHeader = (options: VerboseFormattingArg) => {
  const date = new Date(options.date.year, options.date.month, options.date.day)
  return dateNames[date.getDay()]
}

const formatTitle = (options: VerboseFormattingArg) => {
  const date = new Date(options.date.year, options.date.month, options.date.day)
  const monthName = date.toLocaleString('lv-LV', { month: 'long' })
  const capitalizedMonthName =
    monthName[0].toLocaleUpperCase() + monthName.slice(1)
  return `${capitalizedMonthName} ${options.date.year}`
}

type DayRenderArg = {
  view: View
  date: Date
  allDay?: boolean
  el: HTMLElement
}

const renderDay = (events: CalendarEventType[]) => (arg: DayRenderArg) => {
  const dayEvents = events.filter(x => isSameDay(arg.date, x.date))

  if (dayEvents.length === 0) return

  const dayElement = document.querySelector(
    `.fc-day-top[data-date="${format(arg.date, 'yyyy-MM-dd')}"]`
  )

  if (dayElement === null) return

  dayElement.classList.add('has-event')
}

export const Calendar: React.FC<Props> = () => {
  const [selectedDay, selectDay] = useState<Date | null>(null)

  const events = [
    { title: 'Event 1', date: new Date(2020, 3, 2) },
    { title: 'Event 2/1', date: new Date(2020, 3, 8) },
    { title: 'Event 2/2', date: new Date(2020, 3, 8) },
    { title: 'Event 2/3', date: new Date(2020, 3, 8) },
    { title: 'Event 3', date: new Date(2020, 3, 20) },
    { title: 'Event 4', date: new Date(2020, 2, 24) },
    { title: 'Event 5', date: new Date(2020, 4, 24) }
  ]

  return (
    <>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, momentPlugin, interactionPlugin]}
        themeSystem="standart"
        height="auto"
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
        dateClick={event => selectDay(event.date)}
      />
      <Events events={events} selectedDate={selectedDay} />
    </>
  )
}

export default Calendar
