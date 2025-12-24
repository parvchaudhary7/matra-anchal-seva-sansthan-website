"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  GraduationCap,
  Heart,
  Users,
  Lock,
  Copy,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Shield,
  MessageCircle,
  ExternalLink,
} from "lucide-react"

export default function TrustLandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* SECTION 1: UTILITY BAR */}
      <div className="bg-[#1e3a8a] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
            <div className="flex flex-wrap gap-4">
              <span>Reg No: 165-IV</span>
              <span>CSR No: CSR00091771</span>
              <span>80G Tax Exempt (100%)</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <a href="tel:+919310198009" className="hover:underline">
                Helpline: +91-9310198009
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* GLOBAL HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h1 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-[#1e3a8a]">
                Matra Anchal Sewa
                <br className="md:hidden" /> Sansthan Trust
              </h1>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#home" className="text-[#334155] hover:text-[#1e3a8a] transition-colors">
                Home
              </a>
              <a href="#vision" className="text-[#334155] hover:text-[#1e3a8a] transition-colors">
                Our Vision
              </a>
              <a href="#projects" className="text-[#334155] hover:text-[#1e3a8a] transition-colors">
                Projects
              </a>
              <a href="#compliance" className="text-[#334155] hover:text-[#1e3a8a] transition-colors">
                CSR Data
              </a>
              <a href="#contact" className="text-[#334155] hover:text-[#1e3a8a] transition-colors">
                Contact
              </a>
              <a
                href="#donate"
                className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-4 py-2 rounded-md transition-colors"
              >
                Donate Now
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* SECTION 2: HERO */}
      <section id="home" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              <Badge className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">Serving Humanity Since 2000</Badge>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight text-balance">
                A Legacy of Motherhood.
                <br />A Future of Dignity.
              </h2>
              <p className="text-lg text-[#334155] leading-relaxed">
                From Haridwar to Faridabad. Join our mission to build the Matra-Anchal Sewa Dham.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#donate">
                  <Button className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-8 py-6 text-lg animate-pulse w-full sm:w-auto">
                    Donate for Construction
                  </Button>
                </a>
                <a href="/certificates/80g.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-8 py-6 text-lg bg-transparent w-full sm:w-auto"
                  >
                    View 80G Certificate
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:col-span-3">
              <img
                src="/mata-ji.png"
                alt="Sadhvi Kamlesh Bharti (Mata Ji) providing blessings and service"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUNDER'S VISION */}
      <section id="vision" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
              <div className="md:col-span-1">
                <img
                  src="/mata-ji.png"
                  alt="Sadhvi Kamlesh Bharti (Mata Ji)"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:col-span-2 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a]">The Founder's Vision</h3>
                  <blockquote className="border-l-4 border-[#f97316] pl-6 py-2">
                    <p className="font-serif text-2xl md:text-3xl text-[#334155] italic mb-2">
                      "Whose no one is, we are their family."
                    </p>
                    <p className="text-xl text-[#334155] font-medium">जिसका कोई नहीं, उसका परिवार हैं हम…</p>
                  </blockquote>
                  <p className="text-lg text-[#334155] leading-relaxed">
                    Founded by <strong>Sadhvi Kamlesh Bharti</strong>, we bridge the spiritual service of Haridwar with
                    the urgent social needs of Faridabad.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION 4: INFRASTRUCTURE PROJECT */}
      <section id="projects" className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a]">
              The Future: Matra-Anchal Sewa Dham
            </h3>
            <p className="text-xl text-[#334155] flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              Captain Farm House, Manjhawali, Faridabad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ground Floor Card */}
            <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8 space-y-6">
                <div className="h-16 w-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <h4 className="font-serif text-xl font-bold text-[#1e3a8a]">Ground Floor</h4>
                  <p className="text-2xl font-bold text-[#334155]">Bhav-Setu Vridhashram</p>
                </div>
                <div className="space-y-3">
                  <p className="text-[#334155] leading-relaxed">13 Rooms for Destitute Elderly</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#334155]">Construction Cost</span>
                      <span className="font-bold text-[#1e3a8a]">₹1.84 Cr</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#f97316] h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 1st Floor Card */}
            <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8 space-y-6">
                <div className="h-16 w-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <h4 className="font-serif text-xl font-bold text-[#1e3a8a]">1st Floor</h4>
                  <p className="text-2xl font-bold text-[#334155]">Vidya Mandir School</p>
                </div>
                <div className="space-y-3">
                  <p className="text-[#334155] leading-relaxed">Education for 300+ Underprivileged Children</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#334155]">Construction Cost</span>
                      <span className="font-bold text-[#1e3a8a]">₹1.90 Cr</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#f97316] h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 2nd Floor Card */}
            <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8 space-y-6">
                <div className="h-16 w-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <h4 className="font-serif text-xl font-bold text-[#1e3a8a]">2nd Floor</h4>
                  <p className="text-2xl font-bold text-[#334155]">Women's Empowerment Center</p>
                </div>
                <div className="space-y-3">
                  <p className="text-[#334155] leading-relaxed">Skill Labs & Health Clinic</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#334155]">Construction Cost</span>
                      <span className="font-bold text-[#1e3a8a]">₹2.03 Cr</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#f97316] h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRANSPARENCY & COMPLIANCE */}
      <section id="compliance" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Transparency & Compliance</h3>
            <p className="text-lg text-[#334155]">
              Fully registered and compliant with Government of India regulations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-[#1e3a8a] bg-white p-6 text-center space-y-4">
              <Shield className="h-12 w-12 text-[#1e3a8a] mx-auto" />
              <h4 className="font-bold text-[#1e3a8a]">Income Tax Exemption</h4>
              <p className="text-sm text-[#334155]">12AB & 80G Approved</p>
              <p className="text-xs text-[#334155] font-mono">AAHTM9837C24LK02</p>
              <a
                href="/certificates/80g.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#1e3a8a] hover:underline"
              >
                View Certificate <ExternalLink className="h-3 w-3" />
              </a>
            </Card>

            <Card className="border-2 border-[#1e3a8a] bg-white p-6 text-center space-y-4">
              <CheckCircle2 className="h-12 w-12 text-[#1e3a8a] mx-auto" />
              <h4 className="font-bold text-[#1e3a8a]">Govt Registration</h4>
              <p className="text-sm text-[#334155]">NITI Aayog Registered</p>
              <p className="text-xs text-[#334155] font-mono">UA/2025/0537595</p>
              <a
                href="/certificates/darpan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#1e3a8a] hover:underline"
              >
                View Certificate <ExternalLink className="h-3 w-3" />
              </a>
            </Card>

            <Card className="border-2 border-[#1e3a8a] bg-white p-6 text-center space-y-4">
              <Building2 className="h-12 w-12 text-[#1e3a8a] mx-auto" />
              <h4 className="font-bold text-[#1e3a8a]">Corporate Compliance</h4>
              <p className="text-sm text-[#334155]">CSR Registration</p>
              <p className="text-xs text-[#334155] font-mono">CSR00091771</p>
              <a
                href="/certificates/csr.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#1e3a8a] hover:underline"
              >
                View Certificate <ExternalLink className="h-3 w-3" />
              </a>
            </Card>

            <Card className="border-2 border-[#1e3a8a] bg-white p-6 text-center space-y-4">
              <CheckCircle2 className="h-12 w-12 text-[#1e3a8a] mx-auto" />
              <h4 className="font-bold text-[#1e3a8a]">12A Registration</h4>
              <p className="text-sm text-[#334155]">Income Tax Act</p>
              <p className="text-xs text-[#334155] font-mono">AAHTM9837C24LK02</p>
              <a
                href="/certificates/12a.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#1e3a8a] hover:underline"
              >
                View Certificate <ExternalLink className="h-3 w-3" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6: SECURE BANKING */}
      <section id="donate" className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 space-y-2">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Lock className="h-8 w-8 text-[#1e3a8a]" />
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a8a]">Secure Banking</h3>
              </div>
              <p className="text-lg text-[#334155]">Direct Bank Transfer (CSR & General Donations)</p>
            </div>

            <Card className="border-2 border-[#1e3a8a] shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-bold">PUNJAB NATIONAL BANK</span>
                  <Lock className="h-6 w-6" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm opacity-80">Account Name</p>
                    <p className="text-lg font-bold">MATRA ANCHAL SEWA SANSTHAN TRUST</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm opacity-80">Account Number</p>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-mono font-bold">4694000100058186</p>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 hover:bg-white/20"
                          onClick={() => navigator.clipboard.writeText("4694000100058186")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">IFSC Code</p>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-mono font-bold">PUNB0469400</p>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 hover:bg-white/20"
                          onClick={() => navigator.clipboard.writeText("PUNB0469400")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Branch</p>
                    <p className="text-lg font-bold">Shanti Kunj, Haridwar</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="text-sm text-[#334155] text-center">
                  <strong>Note:</strong> Receipts issued automatically upon verification. All donations are eligible for
                  80G tax benefits.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 7: FOOTER */}
      <footer id="contact" className="bg-[#1e3a8a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: Address */}
            <div className="space-y-4">
              <h4 className="font-bold text-xl mb-4">Registered Office</h4>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <p className="leading-relaxed">
                  27, Phase-2, Ganga Vihar
                  <br />
                  Sadhubela Bhupatwala
                  <br />
                  Haridwar, Uttarakhand
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <Building2 className="h-5 w-5 flex-shrink-0 mt-1" />
                <p className="leading-relaxed">
                  <strong>Project Site:</strong>
                  <br />
                  Captain Farm House, Manjhawali
                  <br />
                  Faridabad, Haryana
                </p>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div className="space-y-4">
              <h4 className="font-bold text-xl mb-4">Contact Us</h4>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+919310198009" className="hover:underline">
                  +91-9310198009
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1" />
                <a href="mailto:finadvisor.ankit@gmail.com" className="hover:underline break-all">
                  finadvisor.ankit@gmail.com
                </a>
              </div>
              <a
                href="https://wa.me/919310198009?text=Hari%20Om.%20I%20want%20to%20donate."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors mt-2"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Column 3: Legal */}
            <div className="space-y-4">
              <h4 className="font-bold text-xl mb-4">Legal & Compliance</h4>
              <p className="text-sm leading-relaxed">
                © 2025 Matra Anchal Sewa Sansthan Trust
                <br />
                All Rights Reserved.
              </p>
              <p className="text-sm opacity-80 leading-relaxed">
                Registered under Section 12AB & 80G
                <br />
                NITI Aayog Approved NGO
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>Built with compassion for a better tomorrow | जिसका कोई नहीं, उसका परिवार हैं हम…</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
