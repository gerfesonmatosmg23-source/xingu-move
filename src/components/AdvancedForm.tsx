"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Star,
  Save,
  RefreshCw,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { toast } from 'sonner'

export default function AdvancedForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    birthDate: '',
    category: '',
    priority: 'medium',
    notifications: true,
    newsletter: false,
    rating: [4],
    budget: [5000],
    description: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formProgress, setFormProgress] = useState(0)

  // Calcular progresso do formulário
  const calculateProgress = () => {
    const fields = Object.values(formData)
    const filledFields = fields.filter(field => {
      if (Array.isArray(field)) return field.length > 0
      if (typeof field === 'boolean') return true
      return field !== ''
    }).length
    return Math.round((filledFields / fields.length) * 100)
  }

  // Atualizar progresso quando dados mudarem
  useState(() => {
    setFormProgress(calculateProgress())
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    setFormProgress(calculateProgress())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast.success('Formulário enviado com sucesso!', {
      description: 'Seus dados foram salvos e processados.'
    })

    setIsSubmitting(false)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      birthDate: '',
      category: '',
      priority: 'medium',
      notifications: true,
      newsletter: false,
      rating: [4],
      budget: [5000],
      description: ''
    })
    setFormProgress(0)
    toast.info('Formulário resetado')
  }

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Progresso do Formulário</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete todos os campos para enviar
              </p>
            </div>
            <Badge variant={formProgress === 100 ? "default" : "secondary"}>
              {formProgress}% completo
            </Badge>
          </div>
          <Progress value={formProgress} className="h-2" />
        </CardContent>
      </Card>

      {/* Main Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Formulário Avançado
          </CardTitle>
          <CardDescription>
            Demonstração de todos os componentes de formulário disponíveis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold flex items-center gap-2">
                <User className="w-4 h-4" />
                Informações Pessoais
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Data de Nascimento</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  placeholder="Rua, número, bairro, cidade"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              </div>
            </div>

            <Separator />

            {/* Preferences */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold flex items-center gap-2">
                <Star className="w-4 h-4" />
                Preferências
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Categoria</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">Negócios</SelectItem>
                      <SelectItem value="personal">Pessoal</SelectItem>
                      <SelectItem value="education">Educação</SelectItem>
                      <SelectItem value="health">Saúde</SelectItem>
                      <SelectItem value="technology">Tecnologia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label>Prioridade</Label>
                  <RadioGroup 
                    value={formData.priority} 
                    onValueChange={(value) => handleInputChange('priority', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="low" />
                      <Label htmlFor="low">Baixa</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium">Média</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" />
                      <Label htmlFor="high">Alta</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              {/* Rating Slider */}
              <div className="space-y-2">
                <Label>Avaliação: {formData.rating[0]} estrelas</Label>
                <Slider
                  value={formData.rating}
                  onValueChange={(value) => handleInputChange('rating', value)}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>1 estrela</span>
                  <span>5 estrelas</span>
                </div>
              </div>
              
              {/* Budget Slider */}
              <div className="space-y-2">
                <Label>Orçamento: R$ {formData.budget[0].toLocaleString()}</Label>
                <Slider
                  value={formData.budget}
                  onValueChange={(value) => handleInputChange('budget', value)}
                  max={50000}
                  min={1000}
                  step={500}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>R$ 1.000</span>
                  <span>R$ 50.000</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Notifications */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Notificações
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Receber notificações</Label>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Receba atualizações sobre seu pedido
                    </p>
                  </div>
                  <Switch
                    checked={formData.notifications}
                    onCheckedChange={(checked) => handleInputChange('notifications', checked)}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange('newsletter', checked)}
                  />
                  <Label htmlFor="newsletter">
                    Quero receber newsletter com novidades e promoções
                  </Label>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Observações</Label>
              <Textarea
                id="description"
                placeholder="Adicione comentários ou observações adicionais..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
              />
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting || formProgress < 100}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Enviar Formulário
                  </>
                )}
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                onClick={resetForm}
                disabled={isSubmitting}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Resetar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Form Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Resumo dos Dados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Nome:</strong> {formData.name || 'Não informado'}
            </div>
            <div>
              <strong>E-mail:</strong> {formData.email || 'Não informado'}
            </div>
            <div>
              <strong>Categoria:</strong> {formData.category || 'Não selecionada'}
            </div>
            <div>
              <strong>Prioridade:</strong> {formData.priority}
            </div>
            <div>
              <strong>Avaliação:</strong> {formData.rating[0]} estrelas
            </div>
            <div>
              <strong>Orçamento:</strong> R$ {formData.budget[0].toLocaleString()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}