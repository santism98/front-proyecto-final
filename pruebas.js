<Route path="/rios" element={<RiversPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:category" element={<SearchPage />} />
          <Route path="/mapa" element={<MapPage />} />
          <Route path="/view/:id" element={<DetailView />} />
          <Route path="/*" element={<Navigate to={"/river"} />} />