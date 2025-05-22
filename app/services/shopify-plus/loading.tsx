import { Skeleton } from "@/components/ui/skeleton"

export default function ShopifyPlusLoading() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section Skeleton */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#008060] via-[#00937B] to-[#00A699]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Skeleton className="h-8 w-40 bg-white/20" />
              <Skeleton className="h-16 w-full bg-white/20" />
              <Skeleton className="h-16 w-full bg-white/20" />
              <Skeleton className="h-24 w-full bg-white/20" />
              <div className="flex gap-4">
                <Skeleton className="h-10 w-32 bg-white/20" />
                <Skeleton className="h-10 w-32 bg-white/20" />
              </div>
            </div>
            <div>
              <Skeleton className="h-80 w-full rounded-lg bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                  <Skeleton className="h-10 w-10 mb-4" />
                  <Skeleton className="h-6 w-40 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-100">
                  <Skeleton className="h-6 w-48 mb-3" />
                  <Skeleton className="h-4 w-full mb-6" />
                  <div className="space-y-2 mb-6">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="flex items-start">
                          <Skeleton className="h-5 w-5 mr-2 rounded-full" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      ))}
                  </div>
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
