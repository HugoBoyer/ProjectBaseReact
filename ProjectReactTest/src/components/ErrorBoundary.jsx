import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Met à jour l’état pour afficher l’UI de repli
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez aussi logguer l’erreur à un service externe ici
    console.error("Erreur capturée :", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Une erreur s’est produite.</h2>
          <p>{this.props.fallback}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
