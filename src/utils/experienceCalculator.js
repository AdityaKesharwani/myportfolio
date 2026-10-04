/**
 * Utility functions for dynamically calculating and formatting work experience.
 * Automatically parses date ranges (e.g. '06/2026 – Present', '10/2022 – 06/2026', '01/2021 – 07/2021'),
 * calculates total actual experience with/without internship, computes duration per role,
 * and sorts experiences chronologically so adding new companies in the future automatically updates everything.
 */

export function parseDate(dateStr) {
  if (!dateStr || dateStr.toLowerCase() === 'present' || dateStr.toLowerCase() === 'current') {
    return new Date();
  }
  // Match MM/YYYY
  const mmyyyy = dateStr.match(/^(\d{1,2})[/-](\d{4})$/);
  if (mmyyyy) {
    const month = parseInt(mmyyyy[1], 10);
    const year = parseInt(mmyyyy[2], 10);
    return new Date(year, month - 1, 1);
  }
  // Match YYYY-MM
  const yyyymm = dateStr.match(/^(\d{4})[/-](\d{1,2})$/);
  if (yyyymm) {
    const year = parseInt(yyyymm[1], 10);
    const month = parseInt(yyyymm[2], 10);
    return new Date(year, month - 1, 1);
  }
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

export function parsePeriod(periodStr) {
  if (!periodStr) return { start: new Date(), end: new Date() };
  const parts = periodStr.split(/–|—|-/).map((s) => s.trim());
  const start = parseDate(parts[0]);
  const end = parts.length > 1 ? parseDate(parts[1]) : new Date();
  return { start, end };
}

export function formatDuration(totalMonths) {
  if (!totalMonths || totalMonths < 1) return '1 mo';
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} mo${months > 1 ? 's' : ''}`;
  }
  if (months === 0) {
    return `${years} yr${years > 1 ? 's' : ''}`;
  }
  return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`;
}

export function calculateRoleMonths(exp) {
  let start, end;
  if (exp.startDate) {
    start = parseDate(exp.startDate);
    end = exp.endDate ? parseDate(exp.endDate) : new Date();
  } else {
    const parsed = parsePeriod(exp.period);
    start = parsed.start;
    end = parsed.end;
  }

  // Calculate inclusive/month difference
  const diffYears = end.getFullYear() - start.getFullYear();
  const diffMonths = end.getMonth() - start.getMonth();
  const months = Math.max(1, diffYears * 12 + diffMonths);
  return { months, start, end };
}

export function calculateExperienceSummary(experiences = []) {
  // Sort experiences newest first (descending by start date or active status)
  const sortedExperiences = [...experiences].map((exp) => {
    const { months, start, end } = calculateRoleMonths(exp);
    const isIntern =
      exp.isInternship === true ||
      (exp.role && exp.role.toLowerCase().includes('intern')) ||
      (exp.company && exp.company.toLowerCase().includes('intern'));

    return {
      ...exp,
      _calculatedMonths: months,
      _durationFormatted: formatDuration(months),
      _startDateObj: start,
      _endDateObj: end,
      _isInternship: isIntern,
    };
  }).sort((a, b) => {
    if (a.active && !b.active) return -1;
    if (!a.active && b.active) return 1;
    return b._startDateObj.getTime() - a._startDateObj.getTime();
  });

  let totalMonths = 0;
  let internshipMonths = 0;
  let fullTimeMonths = 0;

  sortedExperiences.forEach((exp) => {
    totalMonths += exp._calculatedMonths;
    if (exp._isInternship) {
      internshipMonths += exp._calculatedMonths;
    } else {
      fullTimeMonths += exp._calculatedMonths;
    }
  });

  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  const fullTimeYears = Math.floor(fullTimeMonths / 12);
  const fullTimeRemainingMonths = fullTimeMonths % 12;

  const decimalYears = (totalMonths / 12).toFixed(1);

  // Find overall start and end dates
  const earliestDate = sortedExperiences.length > 0
    ? sortedExperiences[sortedExperiences.length - 1]._startDateObj
    : new Date();

  return {
    sortedExperiences,
    totalMonths,
    totalYears,
    remainingMonths,
    formattedTotal:
      remainingMonths > 0
        ? `${totalYears} Years ${remainingMonths} Month${remainingMonths > 1 ? 's' : ''}`
        : `${totalYears} Years`,
    formattedTotalShort: `${decimalYears}+ Years`,
    decimalYears,
    internshipMonths,
    formattedInternship: formatDuration(internshipMonths),
    fullTimeMonths,
    formattedFullTime:
      fullTimeRemainingMonths > 0
        ? `${fullTimeYears} Years ${fullTimeRemainingMonths} Month${fullTimeRemainingMonths > 1 ? 's' : ''}`
        : `${fullTimeYears} Years`,
    totalCompanies: experiences.length,
    activeCompany: sortedExperiences.find((e) => e.active) || sortedExperiences[0],
    earliestDateStr: earliestDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
  };
}
