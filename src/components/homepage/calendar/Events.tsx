import React from 'react'
import { isSameDay, format } from 'date-fns'

export type CalendarEventType = {
	title: string
	date: Date
}

export type Props = {
	events: CalendarEventType[]
	selectedDate: Date | null
}

const Event: React.FC<{ event: CalendarEventType }> = ({ event }) => {
	return (
		<>
			<div className="column is-full event">
				<p>
					<span className="tag date">{format(event.date, 'dd/MM')}</span>
					<strong>{event.title}</strong>
				</p>
			</div>
		</>
	)
}

export const Events: React.FC<Props> = ({ events, selectedDate }) => {
	if (selectedDate === null) return null

	const todaysEvents = events.filter(x => isSameDay(selectedDate, x.date))

	if (todaysEvents.length === 0) return null

	return (
		<div className="events columns is-multiline">
			{todaysEvents.map((event, i, e) => (
				<Event key={i} event={event} />
			))}
		</div>
	)
}

export default Events
