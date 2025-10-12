"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Database, 
  Plus, 
  Trash2, 
  Edit, 
  Search,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Users,
  MapPin,
  Calendar
} from 'lucide-react'
import { toast } from 'sonner'

interface DataItem {
  id: number
  name: string
  email: string
  location: string
  createdAt: string
  status: 'active' | 'inactive'
}

export default function DatabaseDemo() {
  const [data, setData] = useState<DataItem[]>([
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      location: 'São Paulo, SP',
      createdAt: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      location: 'Rio de Janeiro, RJ',
      createdAt: '2024-01-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      location: 'Belo Horizonte, MG',
      createdAt: '2024-01-25',
      status: 'inactive'
    }
  ])

  const [newItem, setNewItem] = useState({
    name: '',
    email: '',
    location: ''
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddItem = async () => {
    if (!newItem.name || !newItem.email || !newItem.location) {
      toast.error('Preencha todos os campos')
      return
    }

    setIsLoading(true)

    // Simular operação de banco de dados
    await new Promise(resolve => setTimeout(resolve, 1000))

    const newDataItem: DataItem = {
      id: Date.now(),
      name: newItem.name,
      email: newItem.email,
      location: newItem.location,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'active'
    }

    setData([...data, newDataItem])
    setNewItem({ name: '', email: '', location: '' })
    setIsLoading(false)
    
    toast.success('Item adicionado com sucesso!')
  }

  const handleDeleteItem = async (id: number) => {
    setIsLoading(true)
    
    // Simular operação de banco de dados
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setData(data.filter(item => item.id !== id))
    setIsLoading(false)
    
    toast.success('Item removido com sucesso!')
  }

  const toggleStatus = async (id: number) => {
    setIsLoading(true)
    
    // Simular operação de banco de dados
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setData(data.map(item => 
      item.id === id 
        ? { ...item, status: item.status === 'active' ? 'inactive' : 'active' }
        : item
    ))
    
    setIsLoading(false)
    toast.success('Status atualizado!')
  }

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-emerald-500' : 'bg-gray-400'
  }

  const stats = {
    total: data.length,
    active: data.filter(item => item.status === 'active').length,
    inactive: data.filter(item => item.status === 'inactive').length
  }

  return (
    <div className="space-y-6">
      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">{stats.total}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total de Registros</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">{stats.active}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Ativos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <AlertCircle className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <p className="text-2xl font-bold">{stats.inactive}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Inativos</p>
          </CardContent>
        </Card>
      </div>

      {/* Add New Item */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Adicionar Novo Registro
          </CardTitle>
          <CardDescription>
            Demonstração de operações CRUD (Create, Read, Update, Delete)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Nome completo"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@exemplo.com"
                value={newItem.email}
                onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Localização</Label>
              <Input
                id="location"
                placeholder="Cidade, Estado"
                value={newItem.location}
                onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
              />
            </div>
          </div>
          
          <Button 
            onClick={handleAddItem} 
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Adicionando...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Registro
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Search and Data List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Registros do Banco de Dados
          </CardTitle>
          <CardDescription>
            Lista de todos os registros com funcionalidades de busca e gerenciamento
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Search */}
          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por nome, email ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Data List */}
          <div className="space-y-4">
            {filteredData.length === 0 ? (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {searchTerm ? 'Nenhum registro encontrado para a busca.' : 'Nenhum registro encontrado.'}
                </AlertDescription>
              </Alert>
            ) : (
              filteredData.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{item.name}</h3>
                        <Badge 
                          className={`${getStatusColor(item.status)} text-white`}
                        >
                          {item.status === 'active' ? 'Ativo' : 'Inativo'}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {item.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(item.createdAt).toLocaleDateString('pt-BR')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => toggleStatus(item.id)}
                        disabled={isLoading}
                      >
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDeleteItem(item.id)}
                        disabled={isLoading}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Database Info */}
      <Alert>
        <Database className="h-4 w-4" />
        <AlertDescription>
          Esta é uma demonstração de operações de banco de dados usando dados simulados. 
          Em um ambiente real, essas operações seriam conectadas a um banco de dados como PostgreSQL, MySQL ou MongoDB.
        </AlertDescription>
      </Alert>
    </div>
  )
}