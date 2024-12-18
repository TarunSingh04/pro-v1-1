"use client";

import AIassitant from "../page-components/ai-assitant/Aiassitant";
import Certificates from "../page-components/certificates/Certificates";
import withDashboardLayout from "../page-components/dashboard/Dashboard";
import DashboardContent from "../page-components/dashboard/dashboardContent/DashboardContent";
import Esgnews from "../page-components/esgnews/Esgnews";
import Learnings from "../page-components/learning/Learnings";
import Marketplace from "../page-components/marketplace/Marketplace";
import Mytask from "../page-components/mytask-content/Mytask";
import ProfileInfo from "../page-components/profile-info/ProfileInfo";
import Reports from "../page-components/reports/Reports";
import Scorecard from "../page-components/scorecard/Scorecard";
import Settings from "../page-components/settings-profile/Settings";
import Sustainability from "../page-components/sustainability-badge/Sustainability";
import Utilitiescontent from "../page-components/utilitiesContent/Utilitiescontent";

const DashboardPage = withDashboardLayout(DashboardContent, "/pages/dashboard");
const MyTasksPage = withDashboardLayout(Mytask, "/pages/mytasks");
const ScorecardPage = withDashboardLayout(Scorecard, "/pages/scorecard");
const ReportsPage = withDashboardLayout(Reports, "/pages/reports");
const SustainanilityPage = withDashboardLayout(
  Sustainability,
  "/pages/sustainability-badge"
);
const CertificatesPage = withDashboardLayout(
  Certificates,
  "/pages/certificates"
);
const UtilitiesPage = withDashboardLayout(Utilitiescontent, "/pages/utilities");
const MarketplacePage = withDashboardLayout(Marketplace, "/pages/marketplace");
const LearningPage = withDashboardLayout(Learnings, "/pages/learning");
const NewsPage = withDashboardLayout(Esgnews, "/pages/esgnews");
const ProfileInfoPage = withDashboardLayout(ProfileInfo, "/pages/profile-info");
const AiAssitant = withDashboardLayout(AIassitant, "/pages/ai-assistant");
const SettingsPage = withDashboardLayout(Settings, "/pages/settings");

export {
  DashboardPage,
  MyTasksPage,
  ScorecardPage,
  ReportsPage,
  SustainanilityPage,
  CertificatesPage,
  UtilitiesPage,
  MarketplacePage,
  LearningPage,
  NewsPage,
  ProfileInfoPage,
  AiAssitant,
  SettingsPage,
};
