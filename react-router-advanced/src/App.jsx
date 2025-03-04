

<Route element={<ProtectedRoute />}>
  <Route path="/profile/*" element={<Profile />} />
  <Route path="/blog/:postId" element={<BlogPost />} />
</Route>