const Stats = () => {
    const stats = [
      { id: 1, name: 'RSUD Telah Bekerjasama', value: '80+' },
      { id: 2, name: 'Mesin Beroperasi Nasional', value: '100+' },
      { id: 3, name: 'Kemurnian Oksigen', value: '>90%' },
      { id: 4, name: 'Dukungan Penuh', value: '24/7' },
    ];
  
    return (
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-primary opacity-90" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-blue-100">{stat.name}</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  };
  
  export default Stats;
