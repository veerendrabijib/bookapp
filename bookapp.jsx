import React, { useState } from 'react';
import { Heart, Search, User, BookOpen, Star, MessageCircle, Share2, Plus, TrendingUp, Users, Home, Library, Compass, UserCircle, X, Send } from 'lucide-react';

export default function BookLoversApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser] = useState({ name: 'Sarah Chen', avatar: '👩‍🦰', followers: 234, following: 156 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddBook, setShowAddBook] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 0, text: '', spoiler: false });

  // Sample data
  const [books, setBooks] = useState({
    currentlyReading: [
      { id: 1, title: 'The Midnight Library', author: 'Matt Haig', cover: '📘', progress: 65, rating: 0 },
      { id: 2, title: 'Project Hail Mary', author: 'Andy Weir', cover: '🚀', progress: 30, rating: 0 }
    ],
    wantToRead: [
      { id: 3, title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', cover: '🎮', progress: 0, rating: 0 },
      { id: 4, title: 'Lessons in Chemistry', author: 'Bonnie Garmus', cover: '🧪', progress: 0, rating: 0 }
    ],
    finished: [
      { id: 5, title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', cover: '💄', progress: 100, rating: 5, review: 'Absolutely stunning! Could not put it down.' },
      { id: 6, title: 'Atomic Habits', author: 'James Clear', cover: '⚡', progress: 100, rating: 4, review: 'Life-changing advice on building better habits.' }
    ]
  });

  const [feed] = useState([
    { id: 1, user: 'Alex Kim', avatar: '👨‍💼', action: 'finished reading', book: 'The Thursday Murder Club', author: 'Richard Osman', rating: 5, review: 'Witty, charming, and absolutely delightful! The characters feel like old friends.', likes: 23, comments: 5, time: '2 hours ago' },
    { id: 2, user: 'Maya Patel', avatar: '👩‍🎓', action: 'started reading', book: 'Fourth Wing', author: 'Rebecca Yarros', time: '5 hours ago', likes: 12, comments: 2 },
    { id: 3, user: 'James Wilson', avatar: '👨‍🦱', action: 'rated', book: 'The Lincoln Highway', author: 'Amor Towles', rating: 4, review: 'Beautiful prose and memorable characters. A journey worth taking.', likes: 34, comments: 8, time: '1 day ago' }
  ]);

  const [recommendations] = useState([
    { id: 7, title: 'The House in the Cerulean Sea', author: 'TJ Klune', cover: '🏠', genre: 'Fantasy', rating: 4.5, reviews: 1234 },
    { id: 8, title: 'Anxious People', author: 'Fredrik Backman', cover: '🏢', genre: 'Fiction', rating: 4.3, reviews: 890 },
    { id: 9, title: 'The Invisible Life of Addie LaRue', author: 'V.E. Schwab', cover: '🌙', genre: 'Fantasy', rating: 4.4, reviews: 2100 },
    { id: 10, title: 'Circe', author: 'Madeline Miller', cover: '🌺', genre: 'Mythology', rating: 4.6, reviews: 3400 }
  ]);

  const renderStars = (rating, interactive = false, onRate = null) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  const BookCard = ({ book, shelf, showProgress = false }) => (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedBook({ ...book, shelf })}>
      <div className="flex gap-4">
        <div className="text-6xl">{book.cover}</div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{book.author}</p>
          {showProgress && book.progress > 0 && book.progress < 100 && (
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{book.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${book.progress}%` }}></div>
              </div>
            </div>
          )}
          {book.rating > 0 && (
            <div className="flex gap-2 items-center">
              {renderStars(book.rating)}
            </div>
          )}
          {book.review && (
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{book.review}</p>
          )}
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {currentUser.name}! 📚</h2>
        <p>Your reading community has been active. Check out what's new!</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <button 
          onClick={() => setShowAddBook(true)}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-600"
        >
          <Plus className="w-5 h-5" />
          What are you reading?
        </button>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {feed.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-3xl">{post.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">{post.user}</span>
                    <span className="text-gray-500 text-sm">{post.action}</span>
                  </div>
                  <div className="text-sm text-gray-500">{post.time}</div>
                </div>
              </div>
              
              <div className="ml-12">
                <div className="font-semibold text-gray-800">{post.book}</div>
                <div className="text-gray-600 text-sm mb-2">by {post.author}</div>
                
                {post.rating && (
                  <div className="mb-2">{renderStars(post.rating)}</div>
                )}
                
                {post.review && (
                  <p className="text-gray-700 mb-3">{post.review}</p>
                )}
                
                <div className="flex gap-6 text-gray-500 text-sm">
                  <button className="flex items-center gap-2 hover:text-red-500">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-500">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </button>
                  <button className="flex items-center gap-2 hover:text-green-500">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MyLibraryPage = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Currently Reading</h2>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {books.currentlyReading.length} books
          </span>
        </div>
        <div className="grid gap-4">
          {books.currentlyReading.map(book => (
            <BookCard key={book.id} book={book} shelf="currentlyReading" showProgress={true} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Want to Read</h2>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
            {books.wantToRead.length} books
          </span>
        </div>
        <div className="grid gap-4">
          {books.wantToRead.map(book => (
            <BookCard key={book.id} book={book} shelf="wantToRead" />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Finished</h2>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            {books.finished.length} books
          </span>
        </div>
        <div className="grid gap-4">
          {books.finished.map(book => (
            <BookCard key={book.id} book={book} shelf="finished" />
          ))}
        </div>
      </div>
    </div>
  );

  const DiscoverPage = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Discover Your Next Favorite Book 🔍</h2>
        <p>Personalized recommendations based on your reading taste</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-gray-800 mb-3">Recommended For You</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {recommendations.map(book => (
            <div key={book.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex gap-4">
                <div className="text-5xl">{book.cover}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{book.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(Math.floor(book.rating))}
                    <span className="text-sm text-gray-600">({book.reviews} reviews)</span>
                  </div>
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {book.genre}
                  </span>
                </div>
              </div>
              <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add to Want to Read
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-gray-800 mb-3">Trending This Week</h3>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <span className="text-gray-600">Books everyone is talking about</span>
        </div>
        <div className="space-y-3">
          {['The Heaven & Earth Grocery Store', 'Holly', 'The Woman in Me'].map((title, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
              <span className="text-2xl font-bold text-gray-400">#{idx + 1}</span>
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{title}</div>
                <div className="text-sm text-gray-500">Trending in Fiction</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-6xl">{currentUser.avatar}</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{currentUser.name}</h2>
            <p className="text-gray-600">Book enthusiast • Joined 2023</p>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-800">{books.finished.length}</div>
            <div className="text-sm text-gray-600">Books Read</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">{currentUser.followers}</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">{currentUser.following}</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Reading Stats 📊</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Books read this year</span>
              <span className="font-bold">12 / 24 goal</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="border rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-800">4.2</div>
              <div className="text-sm text-gray-600">Avg. Rating Given</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-800">Fiction</div>
              <div className="text-sm text-gray-600">Favorite Genre</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Reviews</h3>
        <div className="space-y-4">
          {books.finished.filter(b => b.review).map(book => (
            <div key={book.id} className="border-b pb-4 last:border-b-0">
              <div className="font-semibold text-gray-800">{book.title}</div>
              <div className="flex items-center gap-2 my-2">
                {renderStars(book.rating)}
              </div>
              <p className="text-gray-600 text-sm">{book.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const BookDetailModal = () => {
    if (!selectedBook) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Book Details</h2>
              <button onClick={() => setSelectedBook(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex gap-6 mb-6">
              <div className="text-8xl">{selectedBook.cover}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedBook.title}</h3>
                <p className="text-gray-600 mb-4">{selectedBook.author}</p>
                
                {selectedBook.progress > 0 && selectedBook.progress < 100 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Reading Progress</span>
                      <span>{selectedBook.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${selectedBook.progress}%` }}></div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Rating</label>
                    {renderStars(newReview.rating, true, (rating) => setNewReview({...newReview, rating}))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Write a Review</label>
                    <textarea
                      value={newReview.text}
                      onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                      className="w-full border rounded-lg p-3 text-gray-700"
                      rows="4"
                      placeholder="Share your thoughts about this book..."
                    />
                  </div>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={newReview.spoiler}
                      onChange={(e) => setNewReview({...newReview, spoiler: e.target.checked})}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-700">This review contains spoilers</span>
                  </label>

                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Post Review
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-bold text-gray-800 mb-3">Move to Shelf</h4>
              <div className="grid grid-cols-3 gap-3">
                <button className="border rounded-lg p-3 hover:bg-blue-50 hover:border-blue-500 text-center">
                  <BookOpen className="w-6 h-6 mx-auto mb-1 text-blue-500" />
                  <div className="text-sm font-semibold">Currently Reading</div>
                </button>
                <button className="border rounded-lg p-3 hover:bg-purple-50 hover:border-purple-500 text-center">
                  <Library className="w-6 h-6 mx-auto mb-1 text-purple-500" />
                  <div className="text-sm font-semibold">Want to Read</div>
                </button>
                <button className="border rounded-lg p-3 hover:bg-green-50 hover:border-green-500 text-center">
                  <Star className="w-6 h-6 mx-auto mb-1 text-green-500" />
                  <div className="text-sm font-semibold">Finished</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-800">BookLovers</h1>
            </div>
            
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search books, authors, or friends..."
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="text-3xl cursor-pointer">{currentUser.avatar}</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-12 gap-6">
          {/* Sidebar Navigation */}
          <nav className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <div className="space-y-2">
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentPage === 'home' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-semibold">Home</span>
                </button>
                
                <button
                  onClick={() => setCurrentPage('library')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentPage === 'library' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Library className="w-5 h-5" />
                  <span className="font-semibold">My Library</span>
                </button>
                
                <button
                  onClick={() => setCurrentPage('discover')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentPage === 'discover' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Compass className="w-5 h-5" />
                  <span className="font-semibold">Discover</span>
                </button>
                
                <button
                  onClick={() => setCurrentPage('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    currentPage === 'profile' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <UserCircle className="w-5 h-5" />
                  <span className="font-semibold">Profile</span>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-sm text-gray-600 mb-2">Your Reading Goal</div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
                  <div className="text-2xl font-bold">12 / 24</div>
                  <div className="text-sm opacity-90">books this year</div>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="md:col-span-9">
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'library' && <MyLibraryPage />}
            {currentPage === 'discover' && <DiscoverPage />}
            {currentPage === 'profile' && <ProfilePage />}
          </main>
        </div>
      </div>

      {/* Modals */}
      {selectedBook && <BookDetailModal />}

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="grid grid-cols-4">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center py-3 ${currentPage === 'home' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => setCurrentPage('library')}
            className={`flex flex-col items-center py-3 ${currentPage === 'library' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <Library className="w-6 h-6" />
            <span className="text-xs mt-1">Library</span>
          </button>
          <button
            onClick={() => setCurrentPage('discover')}
            className={`flex flex-col items-center py-3 ${currentPage === 'discover' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <Compass className="w-6 h-6" />
            <span className="text-xs mt-1">Discover</span>
          </button>
          <button
            onClick={() => setCurrentPage('profile')}
            className={`flex flex-col items-center py-3 ${currentPage === 'profile' ? 'text-blue-500' : 'text-gray-600'}`}
          >
            <UserCircle className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}