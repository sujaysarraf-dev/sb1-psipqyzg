'use client';

import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

const meetings = [
  {
    id: 1,
    title: 'Project Kickoff',
    date: new Date(2024, 5, 1),
    time: '10:00 AM',
  },
  {
    id: 2,
    title: 'Client Meeting',
    date: new Date(2024, 5, 5),
    time: '2:00 PM',
  },
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground">View and manage your schedule.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <Card className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
          <div className="space-y-4">
            {meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div>
                  <h3 className="font-medium">{meeting.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {meeting.date.toLocaleDateString()} at {meeting.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}