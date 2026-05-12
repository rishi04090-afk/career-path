$file = "src\data\careers.js"
$content = Get-Content $file -Raw

# List of all 73 careers with their 5-year salaries (from the extracted data)
$salaries = @{
    'teacher' = '$75k–$90k'
    'developer' = '$100k–$140k'
    'electrician' = '$75k–$95k'
    'nurse' = '$85k–$105k'
    'lawyer' = '$80k–$110k'
    'plumber' = '$80k–$100k'
    'hvac-technician' = '$50k–$65k'
    'web-developer' = '$85k–$120k'
    'data-scientist' = '$135k–$180k'
    'graphic-designer' = '$65k–$85k'
    'accountant-cpa' = '$80k–$105k'
    'project-manager' = '$95k–$130k'
    'marketing-manager' = '$95k–$130k'
    'sales-executive' = '$120k–$170k'
    'real-estate-agent' = '$85k–$140k'
    'entrepreneur' = '$60k–$240k'
    'carpenter' = '$62k–$82k'
    'mechanic' = '$60k–$80k'
    'dentist' = '$170k–$210k'
    'veterinarian' = '$105k–$135k'
    'pharmacist' = '$150k–$175k'
    'physical-therapist' = '$105k–$130k'
    'occupational-therapist' = '$85k–$105k'
    'registered-nurse-spec' = '$95k–$125k'
    'police-officer' = '$75k–$98k'
    'firefighter' = '$55k–$75k'
    'truck-driver' = '$65k–$90k'
    'pilot' = '$95k–$125k'
    'chef' = '$58k–$85k'
    'restaurant-manager' = '$58k–$75k'
    'hotel-manager' = '$50k–$65k'
    'event-planner' = '$65k–$88k'
    'photographer' = '$50k–$75k'
    'videographer' = '$55k–$85k'
    'animator' = '$68k–$95k'
    'video-game-developer' = '$95k–$140k'
    'musician' = '$45k–$85k'
    'fashion-designer' = '$60k–$90k'
    'interior-designer' = '$62k–$90k'
    'architect' = '$60k–$75k'
    'civil-engineer' = '$60k–$75k'
    'mechanical-engineer' = '$68k–$85k'
    'electrical-engineer' = '$150k–$210k'
    'chemical-engineer' = '$150k–$210k'
    'software-engineer' = '$150k–$210k'
    'systems-administrator' = '$95k–$135k'
    'network-administrator' = '$90k–$130k'
    'database-administrator' = '$95k–$130k'
    'cybersecurity-analyst' = '$125k–$180k'
    'devops-engineer' = '$160k–$220k'
    'mobile-developer' = '$135k–$185k'
    'ai-ml-engineer' = '$200k–$290k'
    'product-manager' = '$160k–$210k'
    'business-analyst' = '$110k–$155k'
    'financial-advisor' = '$110k–$175k'
    'investment-banker' = '$175k–$350k'
    'public-accountant-cpa' = '$92k–$127k'
    'management-consultant' = '$150k–$230k'
    'hr-manager' = '$72k–$90k'
    'recruiter' = '$87k–$140k'
    'landscaper' = '$70k–$120k'
    'construction-manager' = '$85k–$120k'
    'paramedic' = '$52k–$75k'
    'biologist' = '$48k–$62k'
    'chemist' = '$50k–$65k'
    'meteorologist' = '$80k–$115k'
    'social-worker' = '$58k–$78k'
    'counselor' = '$48k–$62k'
    'medical-doctor' = '$70k–$90k'
    'pediatrician' = '$70k–$90k'
    'surgeon' = '$70k–$90k'
    'aerospace-engineer' = '$70k–$90k'
    'environmental-engineer' = '$60k–$75k'
}

foreach ($career in $salaries.Keys) {
    $salary = $salaries[$career]
    # Pattern to match: totalCost line followed by steps:
    $pattern = "(id: '$career'.*?totalCost: '[^']*',)"
    $replacement = "`$1`n    salaryAfter5Years: '$salary',"
    
    # But only if salaryAfter5Years doesn't already exist for this career
    if ($content -match "id: '$career'[^}]*salaryAfter5Years:") {
        Write-Host "Already has field: $career"
    } else {
        Write-Host "Adding for: $career"
        # More precise replacement
        $content = $content -replace "(`nid: '$career'.*?totalCost: '[^']*',)`n(\s+steps:)", "`$1`n    salaryAfter5Years: '$salary',`n`$2"
    }
}

Set-Content $file $content

Write-Host "Done!"
