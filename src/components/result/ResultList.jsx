"use client"

import { useState, useEffect } from "react"
import {
  HiAcademicCap,
  HiTrophy,
  HiCheckBadge,
  HiSparkles,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2"

const ResultList = () => {
  const [groupedData, setGroupedData] = useState({})
  const [loading, setLoading] = useState(true)
  const [searchRoll, setSearchRoll] = useState("")
  const [selectedClass, setSelectedClass] = useState('all')
  const [expandedClasses, setExpandedClasses] = useState(new Set())
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Convert English numbers to Bengali
  const toBengaliNumber = (num) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
    return num.toString().split('').map(digit => bengaliDigits[digit] || digit).join('')
  }

  useEffect(() => {
    fetch("/results.json")
      .then((res) => res.json())
      .then((data) => {
        const groups = {}

        data.forEach((student) => {
          const className = `শ্রেণি ${student.class}`

          if (!groups[className]) {
            groups[className] = { count: 0, categories: {} }
          }

          let categoryName = student.category
          if (categoryName.toLowerCase().includes("talent")) categoryName = "ট্যালেন্টপুল"
          else if (categoryName.toLowerCase().includes("genral") || categoryName.toLowerCase().includes("general"))
            categoryName = "সাধারণ"
          else if (categoryName.toLowerCase().includes("normal")) categoryName = "সাধারণ"

          if (!groups[className].categories[categoryName]) {
            groups[className].categories[categoryName] = []
          }

          groups[className].categories[categoryName].push(student.roll)
          groups[className].count += 1
        })

        setGroupedData(groups)
        // Expand all classes by default
        setExpandedClasses(new Set(Object.keys(groups)))
        setLoading(false)
      })
      .catch((err) => console.error("Failed to load list", err))
  }, [])

  const filterRolls = (rolls) => {
    if (!searchRoll) return rolls
    return rolls.filter((roll) => roll.toString().includes(searchRoll))
  }

  const toggleClass = (className) => {
    setExpandedClasses((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(className)) {
        newSet.delete(className)
      } else {
        newSet.add(className)
      }
      return newSet
    })
  }

  const totalStudents = Object.values(groupedData).reduce((sum, cls) => sum + cls.count, 0)
  const totalExaminees = 15000

  // ---------- SORTING LOGIC START ----------
  const bengaliToEnglish = (str) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
    return str.split('').map(char => {
      const index = bengaliDigits.indexOf(char)
      return index !== -1 ? index.toString() : char
    }).join('')
  }
  

  const classData = Object.keys(groupedData).sort((a, b) => {
    const numA = parseInt(bengaliToEnglish(a).match(/\d+/)?.[0] || '0')
    const numB = parseInt(bengaliToEnglish(b).match(/\d+/)?.[0] || '0')
    return numA - numB 
  })
  // ---------- SORTING LOGIC END ----------

  const filteredClasses = selectedClass === 'all' ? classData : classData.filter(c => c === selectedClass)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full" />
            <div className="absolute inset-0 border-2 border-transparent border-t-emerald-500 rounded-full animate-spin" />
            <HiTrophy className="absolute w-8 h-8 text-emerald-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-xl font-medium text-gray-900">ফলাফল লোড হচ্ছে...</p>
          <p className="mt-2 text-sm text-gray-500">অনুগ্রহ করে অপেক্ষা করুন</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-gray-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 border-b border-emerald-500">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-white uppercase bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg">
              <HiSparkles className="w-4 h-4" />
              <span>২০২৫ সালের ফলাফল</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">কিশোরকণ্ঠ মেধাবৃত্তি</h1>
            <p className="text-lg text-white/90 max-w-xl mx-auto drop-shadow-md">শ্রেণি ভিত্তিক উত্তীর্ণ শিক্ষার্থীদের সম্পূর্ণ তালিকা</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl">
                  <HiAcademicCap className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{toBengaliNumber(totalExaminees)}</p>
                <p className="text-sm text-white/80">মোট পরীক্ষার্থী</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl">
                  <HiTrophy className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{toBengaliNumber(totalStudents)}</p>
                <p className="text-sm text-white/80">স্কলারশিপ প্রাপ্ত</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-white/20 rounded-xl">
                  <HiCheckBadge className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {toBengaliNumber(((totalStudents / totalExaminees) * 100).toFixed(1))}%
                </p>
                <p className="text-sm text-white/80">সফলতার হার</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Class Filter Tabs - Desktop: Tabs, Mobile: Dropdown */}
        
        {/* Mobile Dropdown */}
        <div className="md:hidden mb-10">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-6 py-4 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <HiAcademicCap className="w-6 h-6 text-emerald-600" />
                <span className="font-bold text-base text-gray-900">
                  {selectedClass === 'all' ? 'সকল শ্রেণি' : selectedClass}
                </span>
              </div>
              {isDropdownOpen ? (
                <HiChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <HiChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto">
                <button
                  onClick={() => {
                    setSelectedClass('all')
                    setIsDropdownOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-6 py-4 transition-all duration-200 ${
                    selectedClass === 'all'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                      : 'hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 text-gray-700'
                  }`}
                >
                  <HiCheckBadge className={`w-5 h-5 ${selectedClass === 'all' ? 'text-white' : 'text-emerald-600'}`} />
                  <span className="font-bold">সকল শ্রেণি</span>
                </button>
                
                {classData.map((className, index) => {
                  const colors = [
                    { from: 'from-blue-600', to: 'to-cyan-600', light: 'from-blue-50 to-cyan-50', icon: 'text-blue-600' },
                    { from: 'from-purple-600', to: 'to-pink-600', light: 'from-purple-50 to-pink-50', icon: 'text-purple-600' },
                    { from: 'from-emerald-600', to: 'to-teal-600', light: 'from-emerald-50 to-teal-50', icon: 'text-emerald-600' },
                    { from: 'from-orange-600', to: 'to-red-600', light: 'from-orange-50 to-red-50', icon: 'text-orange-600' },
                    { from: 'from-indigo-600', to: 'to-purple-600', light: 'from-indigo-50 to-purple-50', icon: 'text-indigo-600' },
                  ][index % 5];

                  return (
                    <button
                      key={className}
                      onClick={() => {
                        setSelectedClass(className)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-6 py-4 transition-all duration-200 border-t border-gray-100 ${
                        selectedClass === className
                          ? `bg-gradient-to-r ${colors.from} ${colors.to} text-white`
                          : `hover:bg-gradient-to-r hover:${colors.light} text-gray-700`
                      }`}
                    >
                      <HiAcademicCap className={`w-5 h-5 ${selectedClass === className ? 'text-white' : colors.icon}`} />
                      <span className="font-bold">{className}</span>
                      {selectedClass === className && (
                        <HiCheckBadge className="w-5 h-5 text-white ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex md:flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedClass('all')}
            className={`px-6 py-3 font-bold text-base rounded-xl transition-all duration-300 shadow-md ${
              selectedClass === 'all'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105 shadow-emerald-500/30'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50'
            }`}
          >
            সকল শ্রেণি
          </button>
          
          {classData.map((className, index) => {
            const colors = [
              'from-blue-600 to-cyan-600',
              'from-purple-600 to-pink-600',
              'from-emerald-600 to-teal-600',
              'from-orange-600 to-red-600',
              'from-indigo-600 to-purple-600',
            ][index % 5];

            return (
              <button
                key={className}
                onClick={() => setSelectedClass(className)}
                className={`px-6 py-3 font-bold text-base rounded-xl transition-all duration-300 shadow-md ${
                  selectedClass === className
                    ? `bg-gradient-to-r ${colors} text-white shadow-lg scale-105 shadow-${colors.split('-')[1]}-500/30`
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50'
                }`}
              >
                {className}
              </button>
            );
          })}
        </div>

        {/* Class Accordion Cards */}
        <div className="space-y-6">
          {filteredClasses.map((className) => {
            const isExpanded = expandedClasses.has(className)

            return (
              <div key={className} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                {/* Class Header - Clickable */}
                <button
                  onClick={() => toggleClass(className)}
                  className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 hover:from-emerald-100/70 hover:to-teal-100/70 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                      <HiAcademicCap className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{className}</h2>
                      <p className="text-sm text-gray-600 flex items-center gap-1.5">
                        <HiCheckBadge className="w-4 h-4 text-emerald-600" />
                        {toBengaliNumber(groupedData[className].count)} জন উত্তীর্ণ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-emerald-700 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full shadow-sm">
                      <HiSparkles className="w-3.5 h-3.5" />
                      {toBengaliNumber(Object.keys(groupedData[className].categories).length)} ক্যাটেগরি
                    </span>
                    {isExpanded ? (
                      <HiChevronUp className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <HiChevronDown className="w-6 h-6 text-emerald-600" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t-2 border-gray-200 bg-gradient-to-br from-gray-50/50 to-white">
                    {Object.keys(groupedData[className].categories).map((cat) => {
                      const allRolls = groupedData[className].categories[cat]
                      const filteredRolls = filterRolls(allRolls)

                      return (
                        <div key={cat} className="p-6 md:p-8 border-b border-gray-200 last:border-b-0">
                          {/* Category Header */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg" />
                              <h3 className="text-lg md:text-xl font-bold text-gray-900">{cat}</h3>
                              <span className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full shadow-sm">
                                {toBengaliNumber(filteredRolls.length)} জন
                              </span>
                            </div>
                            {searchRoll && filteredRolls.length === 0 && (
                              <span className="text-sm font-semibold text-red-500">ফলাফল নেই</span>
                            )}
                          </div>

                          {/* Roll Numbers Grid */}
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                            {filteredRolls
                              .sort((a, b) => a - b)
                              .map((roll) => {
                                const isHighlighted = searchRoll && roll.toString().includes(searchRoll)

                                return (
                                  <div
                                    key={roll}
                                    className={`relative px-3 py-3 text-center rounded-xl text-sm font-semibold transition-all duration-300 ${
                                      isHighlighted
                                        ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/40 scale-110 animate-pulse"
                                        : "bg-white text-gray-900 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 border-2 border-gray-200 hover:border-emerald-400 hover:shadow-lg hover:scale-105"
                                    }`}
                                  >
                                    {toBengaliNumber(roll)}
                                    {isHighlighted && (
                                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white shadow-lg animate-ping" />
                                    )}
                                  </div>
                                )
                              })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-emerald-700 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-full shadow-lg">
            <HiCheckBadge className="w-5 h-5 text-emerald-600" />
            <span>সকল তথ্য সঠিক এবং যাচাইকৃত</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default ResultList