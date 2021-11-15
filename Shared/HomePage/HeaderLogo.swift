//
//  HeaderLogo.swift
//  Key Largo Garden
//
//  Created by Tom Runnels on 11/12/21.
//

import SwiftUI

struct HeaderLogo: View {
    var cornerVals: CGFloat
    var body: some View {
        
        //object.  keeps the whitebox at the top

            
            //whitebox (main)
            VStack {
                Image("tempLogo")
                    .resizable()
                    .scaledToFit()
                Text("Welcome to Key Largo Garden")
            }
            .padding()
            .frame(maxWidth: .infinity)
            .background(Color.white)
            .cornerRadius(radius: cornerVals, corners: [.bottomRight, .bottomLeft])
            .shadow(
                color: Color(red: 150 / 255, green: 150 / 255, blue: 150 / 255, opacity: 0.99),
                radius: 10,
                x: 5,
                y: 5
            )
            
            
    
       
        
    }
    
}

struct HeaderLogo_Previews: PreviewProvider {
    static var previews: some View {
        VStack(alignment: .leading) {
            HeaderLogo(cornerVals: 40)
                .ignoresSafeArea(edges: .all)
                .frame(maxHeight: 300)
            
            Spacer()
        }
        .background(.blue)
        .previewLayout(.fixed(width: 300, height: 400))
        

    }
}


struct CornerRadiusStyle: ViewModifier {
    var radius: CGFloat
    var corners: UIRectCorner

    struct CornerRadiusShape: Shape {

        var radius = CGFloat.infinity
        var corners = UIRectCorner.allCorners

        func path(in rect: CGRect) -> Path {
            let path = UIBezierPath(roundedRect: rect, byRoundingCorners: corners, cornerRadii: CGSize(width: radius, height: radius))
            return Path(path.cgPath)
        }
    }

    func body(content: Content) -> some View {
        content
            .clipShape(CornerRadiusShape(radius: radius, corners: corners))
    }
}

extension View {
    func cornerRadius(radius: CGFloat, corners: UIRectCorner) -> some View {
        ModifiedContent(content: self, modifier: CornerRadiusStyle(radius: radius, corners: corners))
    }
}
