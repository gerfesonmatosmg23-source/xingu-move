"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MapPin, 
  Clock, 
  Zap,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'

interface AnalyticsCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
  color: string
}

function AnalyticsCard({ title, value, change, trend, icon, color }: AnalyticsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center gap-1 mt-1">
              {trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm ${trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                {change}
              </span>
            </div>
          </div>
          <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-full flex items-center justify-center`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AnalyticsDashboard() {
  const analyticsData = [
    {
      title: 'Usuários Ativos',
      value: '2,847',
      change: '+12.5%',
      trend: 'up' as const,
      icon: <Users className="w-6 h-6 text-white" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Localizações',
      value: '1,234',
      change: '+8.2%',
      trend: 'up' as const,
      icon: <MapPin className="w-6 h-6 text-white" />,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Tempo Médio',
      value: '4.2min',
      change: '-2.1%',
      trend: 'down' as const,
      icon: <Clock className="w-6 h-6 text-white" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Performance',
      value: '98.5%',
      change: '+0.8%',
      trend: 'up' as const,
      icon: <Zap className="w-6 h-6 text-white" />,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const progressData = [
    { label: 'CPU Usage', value: 65, color: 'bg-blue-500' },
    { label: 'Memory', value: 78, color: 'bg-emerald-500' },
    { label: 'Storage', value: 45, color: 'bg-orange-500' },
    { label: 'Network', value: 92, color: 'bg-purple-500' }
  ]

  return (
    <div className="space-y-6">
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsData.map((item, index) => (
          <AnalyticsCard key={index} {...item} />
        ))}
      </div>

      {/* System Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Performance do Sistema
          </CardTitle>
          <CardDescription>
            Monitoramento em tempo real dos recursos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {progressData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.label}</span>
                  <Badge variant="outline">{item.value}%</Badge>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Estatísticas de Uso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Gráfico de Barras</p>
                <p className="text-xs text-gray-500">Dados em tempo real</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Distribuição de Dados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Gráfico de Pizza</p>
                <p className="text-xs text-gray-500">Análise detalhada</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}