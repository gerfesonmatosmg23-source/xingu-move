"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { 
  MapPin, 
  User, 
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  LogIn,
  Shield,
  CheckCircle,
  AlertCircle,
  Phone,
  Calendar,
  Car
} from 'lucide-react'
import { toast } from 'sonner'

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  // Register form state
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    userType: 'passenger'
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (loginData.email && loginData.password) {
        toast.success('Login realizado com sucesso!')
        // Here you would typically redirect to the main app
      } else {
        toast.error('Por favor, preencha todos os campos')
      }
      setIsLoading(false)
    }, 1500)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate form
    if (registerData.password !== registerData.confirmPassword) {
      toast.error('As senhas não coincidem')
      setIsLoading(false)
      return
    }

    if (registerData.password.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres')
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      if (registerData.name && registerData.email && registerData.password) {
        toast.success('Conta criada com sucesso! Bem-vindo ao XINGU MOVE!')
        // Here you would typically redirect to the main app
      } else {
        toast.error('Por favor, preencha todos os campos obrigatórios')
      }
      setIsLoading(false)
    }, 2000)
  }

  const handleSocialLogin = (provider: string) => {
    toast.info(`Login com ${provider} em desenvolvimento`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="relative">
                <MapPin className="w-8 h-8 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
            XINGU MOVE
          </h1>
          <p className="text-gray-600 mt-2">Sua rota, seu tempo, seu motorista</p>
        </div>

        {/* Auth Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login" className="gap-2">
              <LogIn className="w-4 h-4" />
              Entrar
            </TabsTrigger>
            <TabsTrigger value="register" className="gap-2">
              <UserPlus className="w-4 h-4" />
              Cadastrar
            </TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LogIn className="w-5 h-5 text-blue-500" />
                  Fazer Login
                </CardTitle>
                <CardDescription>
                  Entre com sua conta para acessar o XINGU MOVE
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="seu@email.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Sua senha"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      Lembrar de mim
                    </label>
                    <button type="button" className="text-blue-600 hover:underline">
                      Esqueci minha senha
                    </button>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Entrando...
                      </div>
                    ) : (
                      <>
                        <LogIn className="w-4 h-4 mr-2" />
                        Entrar
                      </>
                    )}
                  </Button>
                </form>

                <Separator className="my-6" />

                <div className="space-y-3">
                  <p className="text-center text-sm text-gray-600">Ou entre com</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => handleSocialLogin('Google')}
                      className="gap-2"
                    >
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      Google
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleSocialLogin('Facebook')}
                      className="gap-2"
                    >
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      Facebook
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-green-500" />
                  Criar Conta
                </CardTitle>
                <CardDescription>
                  Cadastre-se para começar a usar o XINGU MOVE
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Nome Completo</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="seu@email.com"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-phone">Telefone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={registerData.phone}
                        onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-birthdate">Data de Nascimento</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-birthdate"
                        type="date"
                        value={registerData.birthDate}
                        onChange={(e) => setRegisterData({ ...registerData, birthDate: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Tipo de Usuário</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setRegisterData({ ...registerData, userType: 'passenger' })}
                        className={`p-3 border rounded-lg text-left transition-all ${
                          registerData.userType === 'passenger'
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <User className="w-4 h-4" />
                          <span className="font-medium">Passageiro</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Solicitar corridas
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setRegisterData({ ...registerData, userType: 'driver' })}
                        className={`p-3 border rounded-lg text-left transition-all ${
                          registerData.userType === 'driver'
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Car className="w-4 h-4" />
                          <span className="font-medium">Motorista</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Oferecer corridas
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Mínimo 6 caracteres"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        className="pl-10 pr-10"
                        required
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Confirmar Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="register-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Digite a senha novamente"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 rounded" required />
                    <div className="text-sm text-gray-600">
                      Eu concordo com os{' '}
                      <button type="button" className="text-blue-600 hover:underline">
                        Termos de Uso
                      </button>{' '}
                      e{' '}
                      <button type="button" className="text-blue-600 hover:underline">
                        Política de Privacidade
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Criando conta...
                      </div>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4 mr-2" />
                        Criar Conta
                      </>
                    )}
                  </Button>
                </form>

                <Separator className="my-6" />

                <div className="space-y-3">
                  <p className="text-center text-sm text-gray-600">Ou cadastre-se com</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => handleSocialLogin('Google')}
                      className="gap-2"
                    >
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      Google
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleSocialLogin('Facebook')}
                      className="gap-2"
                    >
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      Facebook
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Security Notice */}
        <Alert className="mt-6 border-green-200 bg-green-50">
          <Shield className="h-4 w-4 text-green-500" />
          <AlertDescription className="text-green-700">
            <strong>Segurança garantida:</strong> Seus dados são protegidos com criptografia de ponta e 
            nunca são compartilhados com terceiros.
          </AlertDescription>
        </Alert>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-sm">Localização Precisa</h3>
            <p className="text-xs text-gray-600 mt-1">GPS em tempo real</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-sm">Pagamento Seguro</h3>
            <p className="text-xs text-gray-600 mt-1">Pix, cartão e dinheiro</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-sm">Suporte 24h</h3>
            <p className="text-xs text-gray-600 mt-1">Sempre disponível</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-gray-500">
          © 2024 XINGU MOVE - Todos os direitos reservados
        </div>
      </div>
    </div>
  )
}