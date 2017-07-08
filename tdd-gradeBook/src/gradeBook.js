function gradeBook (grade1, grade2, grade3) {
  var grade2 = grade2 || 50
  var grade3 = grade3 || 50

  var score = (grade1 + grade2 + grade3) / 3

  if (score >= 90 && score <= 100) {
    return 'A'
  }
  if (score >= 80 && score < 90) {
    return 'B'
  }
  if (score >= 70 && score < 80) {
    return 'C'
  }
  if (score >= 60 && score < 70) {
    return 'D'
  }
  if (score >= 0 && score < 60) {
    return 'F'
  }
  if (score < 0) {
    return 'God dam, how the fuck did you even manage that?'
  }
  return 'No score.'
}
