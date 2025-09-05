import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, Cpu, BarChart3, Shield, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Our better models.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Experience the next generation of AI models designed for precision, efficiency, and reliability.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Large Feature Card */}
          <Card className="md:col-span-2 lg:col-span-2 bg-card hover:bg-accent/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-pointer">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <Badge variant="secondary">Latest</Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl text-balance">Lightning-Fast Processing</CardTitle>
              <CardDescription className="text-lg">
                Our optimized architecture delivers results 10x faster than traditional models while maintaining
                accuracy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <BarChart3 className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  {"99.9% uptime"}
                </span>
                <span className="flex items-center gap-1">
                  <Target className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  {"<100ms latency"}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Precision Card */}
          <Card className="bg-card hover:bg-accent/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-pointer">
            <CardHeader>
              <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                <Target className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <CardTitle className="text-xl">Unmatched Precision</CardTitle>
              <CardDescription>Advanced algorithms ensure accuracy rates exceeding industry standards.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                98.7%
              </div>
              <p className="text-sm text-muted-foreground">Average accuracy score</p>
            </CardContent>
          </Card>

          {/* Security Card */}
          <Card className="bg-card hover:bg-accent/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-pointer">
            <CardHeader>
              <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                <Shield className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <CardTitle className="text-xl">Enterprise Security</CardTitle>
              <CardDescription>Built with privacy-first architecture and end-to-end encryption.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <Badge variant="outline" className="w-fit group-hover:translate-x-1 transition-transform duration-300">
                  SOC 2 Compliant
                </Badge>
                <Badge
                  variant="outline"
                  className="w-fit group-hover:translate-x-1 transition-transform duration-300 delay-75"
                >
                  GDPR Ready
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="md:col-span-2 bg-card hover:bg-accent/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Cpu className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl">Performance Metrics</CardTitle>
              </div>
              <CardDescription>Real-time performance data from our global infrastructure.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    2.3B
                  </div>
                  <p className="text-sm text-muted-foreground">Parameters</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 delay-75">
                    150+
                  </div>
                  <p className="text-sm text-muted-foreground">Languages</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 delay-150">
                    24/7
                  </div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 delay-200">
                    1M+
                  </div>
                  <p className="text-sm text-muted-foreground">Daily queries</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Innovation Card */}
          <Card className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group cursor-pointer">
            <CardHeader>
              <div className="p-2 bg-primary-foreground/10 rounded-lg w-fit mb-3 group-hover:bg-primary-foreground/20 transition-colors duration-300">
                <Sparkles className="h-6 w-6 text-primary-foreground group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <CardTitle className="text-xl">Continuous Innovation</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Regular updates with cutting-edge research and improvements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="secondary"
                className="w-full group-hover:bg-primary-foreground/20 transition-all duration-300 group-hover:translate-y-[-2px]"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">No credit card required • Free tier available</p>
        </div>
      </div>

      {/* Footer with LuminAI branding and navigation links */}
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Brand */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-foreground">LuminAI</h3>
              <p className="text-sm text-muted-foreground">Illuminating the future with intelligent AI models</p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6 md:gap-8">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
              >
                Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
              >
                Gallery of Models
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground">© 2024 LuminAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
