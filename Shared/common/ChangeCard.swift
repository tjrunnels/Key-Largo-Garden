//
//  ChangeCard.swift
//  Key Largo Garden
//
//  Created by Tom Runnels on 11/12/21.
//

import SwiftUI

struct ChangeCard: View {
    var name: String
    var size: CGFloat
    
    let skyBlue = Color(red: 0.3627, green: 0.6392, blue: 1.0)
    var body: some View {
        //top level object.  Fixed size based on size arg
            ZStack {
                Image(name)  //image size is "size" arg
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(maxWidth: size)
                    .clipped()
                VStack {
                    Spacer()
                    Text("new photo for " + name)
                        .font(.title2)
                        .foregroundColor(.white)
                        .bold()
                        .padding([.top, .bottom], 10)
                    .frame(maxWidth: .infinity)
                    .background(skyBlue)
                    
            
                }
                .frame(width: (size) , height: (size * 0.55))
            }
            .frame(width: (size) , height: (size * 0.55))
            .cornerRadius(size/12)
        
    }
}

struct ChangeCard_Previews: PreviewProvider {
    static var previews: some View {

        ZStack{
            
            Rectangle()
                .fill(
                    .clear
                )
                .frame(width: 500, height: 500)
                .background(
                    LinearGradient(gradient: Gradient(colors: [.green, .blue]), startPoint: .bottomTrailing, endPoint: .topLeading)
                        .opacity(0.7)
                        .edgesIgnoringSafeArea(.all)
                )
            
            VStack {
                ChangeCard(name: "plant1", size: CGFloat(400))

            }
            
            
        
        }
        .previewLayout(.fixed(width: 500, height: 500))
          
    }
}
