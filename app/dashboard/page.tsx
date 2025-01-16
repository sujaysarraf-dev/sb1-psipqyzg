import { Card } from '@/components/ui/card';
import {
  Users,
  UserMinus,
  Settings,
  Building2,
  DollarSign,
  Briefcase,
  TicketCheck,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Employee',
    value: '313',
    change: '+10%',
    icon: Users,
    changeType: 'positive',
  },
  {
    title: 'On Leave Employee',
    value: '55',
    change: '+2.15%',
    icon: UserMinus,
    changeType: 'positive',
  },
  {
    title: 'Total Project',
    value: '313',
    change: '+5.15%',
    icon: Settings,
    changeType: 'positive',
  },
  {
    title: 'Completed Project',
    value: '150',
    change: '+5.5%',
    icon: Settings,
    changeType: 'positive',
  },
  {
    title: 'Total Client',
    value: '151',
    change: '+2.15%',
    icon: Building2,
    changeType: 'positive',
  },
  {
    title: 'Total Revenue',
    value: '$55',
    change: '+2.15%',
    icon: DollarSign,
    changeType: 'positive',
  },
  {
    title: 'Total Jobs',
    value: '55',
    change: '+2.15%',
    icon: Briefcase,
    changeType: 'positive',
  },
  {
    title: 'Total Ticket',
    value: '55',
    change: '+2.15%',
    icon: TicketCheck,
    changeType: 'positive',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-semibold">{stat.value}</h3>
                  <span
                    className={`text-sm ${
                      stat.changeType === 'positive'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}