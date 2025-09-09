
# AvayLable: A Campus-Wide Skill Sharing Platform

*Building Trusted Peer-to-Peer Networks Through Community Integration with Safety Solutions*

A college skill-sharing mobile app prototype built with React Native. This research project addresses the critical need for peer-to-peer platforms that prioritize campus safety while fostering economic opportunities within student communities.

## Research Background

**Authors:** Aayan Shah '28, Paung Khuat '28, Stephen Owusu Badu '27, Freeman Buernor '26  
**Institution:** Colby College - Davis Institute for Artificial Intelligence | Halloran Lab for Entrepreneurship | SureStart

This study traces the entrepreneurial journey of developing AvayLable as a peer-to-peer service platform for campus communities. The current prototype focuses on ride-sharing services with plans to expand into a comprehensive skill-sharing ecosystem.

## Market Analysis

Our research identified significant market opportunities:

- **TAM:** $1.5B USD - Total addressable market for college technology & safety solutions
- **SAM:** $600M USD - Student services & safety technology market  
- **SOM:** $90M USD - Campus safety & support solutions addressable market

**Key Findings:**
- 87% of students expressed interest in campus-exclusive ride-sharing
- Safety and trust ranked as top priorities over cost savings
- Students preferred peer drivers from their own campus community
- Existing solutions were deemed expensive and often unavailable in rural Maine

## Core Value Propositions

1. **Safety First** - Campus-based identity verification ensures a trusted, student-only network
2. **Affordable Rides** - Peer-to-peer pricing makes transportation accessible for students
3. **Rural Reliability** - Designed to serve areas where traditional ride-sharing doesn't operate

## Tech Stack

- **React Native** with Expo
- **NativeWind** for styling  
- **Clerk** for authentication
- **Neon DB** (PostgreSQL) for database
- **Stripe** for payments
- **Google Maps API** for mapping
- **Zustand** for state management

## Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/aayans314/AvayLable_Locus.git
   cd AvayLable_Locus
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with your API keys:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
   EXPO_PUBLIC_PLACES_API_KEY=
   EXPO_PUBLIC_DIRECTIONS_API_KEY=
   DATABASE_URL=
   EXPO_PUBLIC_GEOAPIFY_API_KEY=
   EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   STRIPE_SECRET_KEY=
   ```

4. Run the app:
   ```bash
   npx expo start
   ```

## Current Features (Locus Rides)

- Campus-based user authentication with institutional verification
- Real-time location and mapping optimized for college campuses
- Peer-to-peer ride booking with student driver matching
- Integrated payment system with affordable pricing
- Safety-focused design with campus community trust mechanisms
- Cross-platform mobile app (iOS/Android)

## Research Methodology

- **User-Centered Design:** Iterative market validation through structured interviews with 50+ Colby College students
- **Competitive Analysis:** Analyzed existing platforms (UberLyft, campus shuttles, TaskRabbit) to identify gaps
- **MVP Testing:** Beta user groups refined platform functionality and user experience
- **Market Validation:** Strategic pivot based on user feedback and rural Maine market needs

## Future Expansion

The platform is designed to scale beyond ride-sharing into a comprehensive skill-sharing ecosystem:
- Tutoring and academic support services
- Food delivery and campus errands
- Study group coordination
- General peer-to-peer service marketplace
- Integration across NESAC institutions

## Competitive Advantage

By aligning with institutional goals and integrating into campus infrastructure, AvayLable creates a uniquely tailored solution that generic platforms can't replicate, addressing the unique challenges of rural college environments.

## Acknowledgements

Special thanks to Jon Godsoe for guidance with technical implementation, Mike McQuillan from HRCaap for entrepreneurial support, and the Davis AI and Halloran Lab teams for research opportunities.

---

*A research-backed prototype for connecting college students through trusted peer-to-peer services.*
